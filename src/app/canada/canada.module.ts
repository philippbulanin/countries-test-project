import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanadaComponent } from './canada.component';
import { BaseCityListModule } from '../base-city-list/base-city-list.module';



@NgModule({
  declarations: [CanadaComponent],
  imports: [
    CommonModule,
    BaseCityListModule
  ]
})
export class CanadaModule { }
