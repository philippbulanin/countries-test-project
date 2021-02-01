import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { City } from '../shared-classes';

@Component({
  selector: 'base-city-list',
  templateUrl: './base-city-list.component.html',
  styleUrls: ['./base-city-list.component.scss']
})
export class BaseCityListComponent implements OnInit, OnDestroy {
  private _formChangesSubscription: Subscription;

  @Input() cities: City[];
  @Output() setCities = new EventEmitter<City[]>();

  public citiesFormArray = new FormArray([]);
  public addCityControl = new FormControl("", [Validators.required]);

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cities.forEach(city => {
      this.citiesFormArray.push(this._fb.group(city));
    });

    this._formChangesSubscription = this.citiesFormArray.valueChanges.subscribe(
      (cities: City[]) => {
        this.setCities.emit(cities);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this._formChangesSubscription) this._formChangesSubscription.unsubscribe();
  }

  public delete(index: number): void {
    this.citiesFormArray.removeAt(index);
  }

  public addCity(): void {
    const newCityName: string = this.addCityControl.value;

    if (newCityName && newCityName.length) {
      const newCity = new City(newCityName);

      this.citiesFormArray.push(this._fb.group(newCity));

      this.addCityControl.setValue("");
    }
  }

}
