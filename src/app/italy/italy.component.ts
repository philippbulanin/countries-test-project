import { Component, OnInit } from '@angular/core';
import { City } from '../shared-classes';
import { ItalyService } from './italy.service';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.scss']
})
export class ItalyComponent implements OnInit {
  public cities: City[];

  constructor(
    private _service: ItalyService
  ) { }

  ngOnInit(): void {
    this.cities = this._service.getCities();
  }

  public setCities(cities: City[]): void {
    this._service.setCities(cities);
  }

}
