import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../interfaces/providers.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SlotsService {
  constructor(private http: HttpClient) {}
  private slotCategoriesAPI = `${environment.crocobetAPI}/v2/slot/categories?include=games`;
  private providersAPI = `${environment.crocobetAPI}?type=slot&platform=desktop`;
  private slotProvidersAPI = `${environment.crocobetAPI}/v2/slot/providers`;

  getProvidersList() {
    return this.http
      .get<{ data: Provider[] }>(this.providersAPI)
      .pipe(map((res) => res.data));
  }
}
