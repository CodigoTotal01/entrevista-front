import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajesComponent} from "./personajes/personajes.component";
import {AuthGuard} from "../guards/auth.guard";
import {RegistrarPersonajeComponent} from "./registrar-personaje/registrar-personaje.component";

const routes: Routes = [
  {
    path: 'personajes',
    canActivate: [ AuthGuard ],
    canLoad:[AuthGuard],
    component: PersonajesComponent
  },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full' },

  {
    path: 'registrar-personaje/:nombre/:img',
    component: RegistrarPersonajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
