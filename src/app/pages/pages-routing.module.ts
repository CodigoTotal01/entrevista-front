import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajesComponent} from "./personajes/personajes.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: 'personajes',
    canActivate: [ AuthGuard ],
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
