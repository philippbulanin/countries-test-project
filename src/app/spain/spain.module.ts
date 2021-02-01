import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpainComponent } from './spain.component';
import { BaseCityListModule } from '../base-city-list/base-city-list.module';



@NgModule({
  declarations: [SpainComponent],
  imports: [
    CommonModule,
    BaseCityListModule
  ]
})
export class SpainModule { }
