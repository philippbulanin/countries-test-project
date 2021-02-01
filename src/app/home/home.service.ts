import { Injectable } from '@angular/core';
import { Country } from '../shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public countries: Country[] = [
    {
      id: 0,
      countryName: "Ukraine",
      routerLink: "ukraine"
    },
    {
      id: 1,
      countryName: "Norway",
      routerLink: "norway"
    },
    {
      id: 2,
      countryName: "Canada",
      routerLink: "canada"
    },
    {
      id: 3,
      countryName: "Spain",
      routerLink: "spain"
    },
    {
      id: 4,
      countryName: "Italy",
      routerLink: "italy"
    }
  ];

  constructor() { }
}
