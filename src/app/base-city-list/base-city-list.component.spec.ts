import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../shared-classes';

import { BaseCityListComponent } from './base-city-list.component';

describe('BaseCityListComponent', () => {
  let component: BaseCityListComponent;
  let fixture: ComponentFixture<BaseCityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCityListComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add elements to list', () => {
    const currentNumberOfCities = component.citiesFormArray.controls.length;
    component.addCityControl.setValue("New city");
    component.addCity();
    expect(component.citiesFormArray.controls.length === currentNumberOfCities + 1).toBe(true, 'city was added');
  });
});
