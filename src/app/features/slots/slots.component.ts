import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SlotsService } from '../../shared/services/slots.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SlotProvidersComponent } from '../../components/slot-providers/slot-providers.component';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotProvidersComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {
  providersList = toSignal(this.slotsService.getProvidersList());

  constructor(private slotsService: SlotsService) {}
}
