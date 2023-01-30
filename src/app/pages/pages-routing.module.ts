import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajesComponent} from "./personajes/personajes.component";

const routes: Routes = [
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
