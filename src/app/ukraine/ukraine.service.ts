import { Injectable } from '@angular/core';
import { City } from '../shared-classes';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class UkraineService {
  public getCities(): City[] {
    return this._dataService.getUkraineCities()
  }

  public setCities(cities: City[]): void {
    this._dataService.setUkraineCities(cities);
  }

  constructor(
    private _dataService: SharedDataService
  ) { }
}
