import { Component, OnInit } from '@angular/core';
import { Country } from '../shared-interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public countries: Country[];

  constructor(
    private _service: HomeService
  ) { }

  ngOnInit(): void {
    this.countries = this._service.countries;
  }

}
