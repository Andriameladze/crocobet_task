import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { SlotCardComponent } from '../../components/slot-card/slot-card.component';
import { SlotCategoriesComponent } from '../../components/slot-categories/slot-categories.component';
import { SlotProvidersComponent } from '../../components/slot-providers/slot-providers.component';
import { Game } from '../../shared/interfaces/game.interface';
import { SlotsService } from '../../shared/services/slots.service';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotProvidersComponent, SlotCardComponent, SlotCategoriesComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  providers: [SlotsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent implements OnInit {
  providersList = toSignal(this.slotsService.getProvidersList());
  categoriesList = toSignal(this.slotsService.getCategoriesList());
  slotGames?: Observable<Game[]>;
  slotCategory?: string;
  slotProvider?: string;

  constructor(
    private slotsService: SlotsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) =>
      this.getSlotGames(params)
    );
  }

  getSlotGames(params: Params) {
    const handlers: { [key: string]: (value: string) => void } = {
      category: (value: string) =>
        (this.slotGames = this.slotsService.getSlotsByCategory(value)),
      provider: (value: string) =>
        (this.slotGames = this.slotsService.getSlotsByProvider(value)),
    };

    for (const key in params) {
      if (handlers[key]) {
        handlers[key](params[key as keyof typeof params]);
        return;
      }
    }
    this.slotGames = this.slotsService.getSlotsByCategory();
  }
}
