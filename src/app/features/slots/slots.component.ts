import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { SlotsService } from '../../shared/services/slots.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SlotProvidersComponent } from '../../components/slot-providers/slot-providers.component';
import { SlotCardComponent } from '../../components/slot-card/slot-card.component';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotProvidersComponent, SlotCardComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {
  providersList = toSignal(this.slotsService.getProvidersList());
  slotGames = toSignal(this.slotsService.getSlotsByCategory());

  constructor(private slotsService: SlotsService) {}
}
