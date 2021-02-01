import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCityListComponent } from './base-city-list.component';

describe('BaseCityListComponent', () => {
  let component: BaseCityListComponent;
  let fixture: ComponentFixture<BaseCityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCityListComponent ]
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
});
