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
      routerLink: "/ukraine"
    },
    {
      id: 0,
      countryName: "Ukraine",
      routerLink: "/ukraine"
    },{
      id: 0,
      countryName: "Ukraine",
      routerLink: "/ukraine"
    },{
      id: 0,
      countryName: "Ukraine",
      routerLink: "/ukraine"
    },{
      id: 0,
      countryName: "Ukraine",
      routerLink: "/ukraine"
    },
  ];

  constructor() { }
}
