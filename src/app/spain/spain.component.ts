import { Component, OnInit } from '@angular/core';
import { City } from '../shared-classes';
import { SpainService } from './spain.service';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.scss']
})
export class SpainComponent implements OnInit {
  public cities: City[];

  constructor(
    private _service: SpainService
  ) { }

  ngOnInit(): void {
    this.cities = this._service.getCities();
  }

  public setCities(cities: City[]): void {
    this._service.setCities(cities);
  }

}
