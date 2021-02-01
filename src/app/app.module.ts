import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UkraineModule } from './ukraine/ukraine.module';
import { CanadaModule } from './canada/canada.module';
import { NorwayModule } from './norway/norway.module';
import { ItalyModule } from './italy/italy.module';
import { SpainModule } from './spain/spain.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    UkraineModule,
    CanadaModule,
    NorwayModule,
    ItalyModule,
    SpainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
