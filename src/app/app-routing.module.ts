import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanadaComponent } from './canada/canada.component';
import { HomeComponent } from './home/home.component';
import { ItalyComponent } from './italy/italy.component';
import { NorwayComponent } from './norway/norway.component';
import { SpainComponent } from './spain/spain.component';
import { UkraineComponent } from './ukraine/ukraine.component';


const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
          {
            path: "ukraine",
            component: UkraineComponent
          },
          {
            path: "norway",
            component: NorwayComponent
          },
          {
            path: "canada",
            component: CanadaComponent
          },
          {
            path: "spain",
            component: SpainComponent
          },
          {
            path: "italy",
            component: ItalyComponent
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
