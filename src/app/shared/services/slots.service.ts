import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SlotsService {
  constructor() {}
  private slotCategoriesAPI = `${environment.crocobetAPI}/v2/slot/categories?include=games`;
  private providersAPI = `${environment.crocobetAPI}/?type=slot&platform=desktop`;
  private slotProvidersAPI = `${environment.crocobetAPI}/v2/slot/providers`;
}
