import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SlotCategory } from '../interfaces/slot-category.interface';
import { Provider } from '../interfaces/slot-providers.interface';
import { SlotsByProviders } from '../interfaces/slots-by-providers.interface';

@Injectable({
  providedIn: 'root',
})
export class SlotsService {
  constructor(private http: HttpClient) {}
  private slotCategoriesAPI = `${environment.crocobetAPI}/v2/slot/categories?include=games`;
  private providersAPI = `${environment.crocobetAPI}?type=slot&platform=desktop`;
  private slotsByProvidersAPI = `${environment.crocobetAPI}/v2/slot/providers`;

  getSlotsByCategory(category?: string) {
    return this.http
      .get<{ data: SlotCategory[] }>(this.slotCategoriesAPI)
      .pipe(
        map((res) =>
          category
            ? res.data.filter(
                (item: { category: string }) => item.category === category
              )[0]?.games
            : res.data[0].games || []
        )
      );
  }

  getProvidersList() {
    return this.http
      .get<{ data: Provider[] }>(this.providersAPI)
      .pipe(map((res) => res.data));
  }

  getCategoriesList() {
    const categoryKeys = ['web:popular', 'web:new_games', 'web:buy_bonus'];
    return this.http
      .get<{ data: SlotCategory[] }>(this.slotCategoriesAPI)
      .pipe(
        map((res) => res.data.filter((e) => categoryKeys.includes(e.category)))
      );
  }

  getSlotsByProvider(provider: string) {
    return this.http
      .get<{ data: SlotsByProviders }>(
        `${this.slotsByProvidersAPI}/${provider}`
      )
      .pipe(map((res) => res.data.games));
  }
}
