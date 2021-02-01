import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkraineComponent } from './ukraine.component';
import { BaseCityListModule } from '../base-city-list/base-city-list.module';



@NgModule({
  declarations: [UkraineComponent],
  imports: [
    CommonModule,
    BaseCityListModule
  ]
})
export class UkraineModule { }
