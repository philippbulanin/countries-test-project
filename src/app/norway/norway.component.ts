import { Component, OnInit } from '@angular/core';
import { City } from '../shared-classes';
import { NorwayService } from './norway.service';

@Component({
  selector: 'app-norway',
  templateUrl: './norway.component.html',
  styleUrls: ['./norway.component.scss']
})
export class NorwayComponent implements OnInit {
  public cities: City[];

  constructor(
    private _service: NorwayService
  ) { }

  ngOnInit(): void {
    this.cities = this._service.getCities();
  }

  public setCities(cities: City[]): void {
    this._service.setCities(cities);
  }

}
