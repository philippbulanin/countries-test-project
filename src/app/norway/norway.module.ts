import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorwayComponent } from './norway.component';
import { BaseCityListModule } from '../base-city-list/base-city-list.module';



@NgModule({
  declarations: [NorwayComponent],
  imports: [
    CommonModule,
    BaseCityListModule
  ]
})
export class NorwayModule { }
