import { Injectable } from '@angular/core';
import { City } from '../shared-classes';
import { SharedDataService } from '../shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class ItalyService {
  public getCities(): City[] {
    return this._dataService.getItalyCities()
  }

  public setCities(cities: City[]): void {
    this._dataService.setItalyCities(cities);
  }

  constructor(
    private _dataService: SharedDataService
  ) { }
}
