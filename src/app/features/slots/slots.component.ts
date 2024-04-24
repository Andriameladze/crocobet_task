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
import { SlotCategoriesComponent } from '../../components/slot-categories/slot-categories.component';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotProvidersComponent, SlotCardComponent, SlotCategoriesComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {
  providersList = toSignal(this.slotsService.getProvidersList());
  categoriesList = toSignal(this.slotsService.getCategoriesList());
  slotGames = toSignal(this.slotsService.getSlotsByCategory());

  constructor(private slotsService: SlotsService) {
    this.slotsService.getCategoriesList().subscribe((e) => console.log(e));
  }
}
