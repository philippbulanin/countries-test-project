import { Injectable } from '@angular/core';
import { City } from '../shared-classes';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class SpainService {
  public getCities(): City[] {
    return this._dataService.getSpainCities()
  }

  public setCities(cities: City[]): void {
    this._dataService.setSpainCities(cities);
  }

  constructor(
    private _dataService: SharedDataService
  ) { }
}
