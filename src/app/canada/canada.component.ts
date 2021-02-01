import { Component, OnInit } from '@angular/core';
import { City } from '../shared-classes';
import { CanadaService } from './canada.service';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.component.html',
  styleUrls: ['./canada.component.scss']
})
export class CanadaComponent implements OnInit {
  public cities: City[];

  constructor(
    private _service: CanadaService
  ) { }

  ngOnInit(): void {
    this.cities = this._service.getCities();
  }

  public setCities(cities: City[]): void {
    this._service.setCities(cities);
  }

}
