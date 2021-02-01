import { Injectable } from '@angular/core';
import { City } from '../shared-classes';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class NorwayService {
  public getCities(): City[] {
    return this._dataService.getNorwayCities()
  }

  public setCities(cities: City[]): void {
    this._dataService.setNorwayCities(cities);
  }

  constructor(
    private _dataService: SharedDataService
  ) { }
}
