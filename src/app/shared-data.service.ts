import { Injectable } from '@angular/core';
import { City } from './shared-classes';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private _ukraineCities: City[] = [new City("Odessa"), new City("Kiev")];
  private _canadaCities: City[] = [new City("Toronto"), new City("Montreal")];
  private _norwayCities: City[] = [new City("Oslo"), new City("Trondheim")];
  private _spainCities: City[] = [new City("Madrid"), new City("Barcelona")];
  private _italyCities: City[] = [new City("Rome"), new City("Florence")];

  public getUkraineCities(): City[] {
    return this._ukraineCities;
  }

  public setUkraineCities(cities: City[]): void {
    this._ukraineCities = cities;
  }

  public getCanadaCities(): City[] {
    return this._canadaCities;
  }

  public setCanadaCities(cities: City[]): void {
    this._canadaCities = cities;
  }

  public getNorwayCities(): City[] {
    return this._norwayCities;
  }

  public setNorwayCities(cities: City[]): void {
    this._norwayCities = cities;
  }


  public getSpainCities(): City[] {
    return this._spainCities;
  }

  public setSpainCities(cities: City[]): void {
    this._spainCities = cities;
  }


  public getItalyCities(): City[] {
    return this._italyCities;
  }

  public setItalyCities(cities: City[]): void {
    this._italyCities = cities;
  }

  constructor() { }
}
