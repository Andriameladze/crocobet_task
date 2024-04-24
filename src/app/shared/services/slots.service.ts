import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/slot-providers.interface';
import { map } from 'rxjs';
import { SlotCategory } from '../interfaces/slot-category.interface';

@Injectable({
  providedIn: 'root',
})
export class SlotsService {
  constructor(private http: HttpClient) {}
  private slotCategoriesAPI = `${environment.crocobetAPI}/v2/slot/categories?include=games`;
  private providersAPI = `${environment.crocobetAPI}?type=slot&platform=desktop`;
  private slotsByProvidersAPI = `${environment.crocobetAPI}/v2/slot/providers`;

  getSlotsByCategory() {
    return this.http
      .get<any>(this.slotCategoriesAPI)
      .pipe(map((res) => res.data));
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
}
