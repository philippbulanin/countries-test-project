import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItalyComponent } from './italy.component';
import { BaseCityListModule } from '../base-city-list/base-city-list.module';



@NgModule({
  declarations: [ItalyComponent],
  imports: [
    CommonModule,
    BaseCityListModule
  ]
})
export class ItalyModule { }
