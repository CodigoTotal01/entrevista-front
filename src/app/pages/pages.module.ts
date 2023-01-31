import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PersonajesComponent} from "./personajes/personajes.component";
import { RegistrarPersonajeComponent } from './registrar-personaje/registrar-personaje.component';
import {AuthRoutingModule} from "../auth/auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PersonajesRegistradosComponent } from './personajes-registrados/personajes-registrados.component';

@NgModule({
  declarations: [
    PagesComponent,
    PersonajesComponent,
    RegistrarPersonajeComponent,
    PersonajesRegistradosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
