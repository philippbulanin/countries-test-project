import { Injectable } from '@angular/core';
import { City } from '../shared-classes';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class CanadaService {
  public getCities(): City[] {
    return this._dataService.getCanadaCities()
  }

  public setCities(cities: City[]): void {
    this._dataService.setCanadaCities(cities);
  }

  constructor(
    private _dataService: SharedDataService
  ) { }
}
