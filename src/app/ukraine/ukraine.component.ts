import { Component, OnInit } from '@angular/core';
import { City } from '../shared-classes';
import { UkraineService } from './ukraine.service';

@Component({
  selector: 'app-ukraine',
  templateUrl: './ukraine.component.html',
  styleUrls: ['./ukraine.component.scss']
})
export class UkraineComponent implements OnInit {
  public cities: City[];

  constructor(
    private _service: UkraineService
  ) { }

  ngOnInit(): void {
    this.cities = this._service.getCities();
  }

  public setCities(cities: City[]): void {
    this._service.setCities(cities);
  }

}
