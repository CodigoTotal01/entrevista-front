import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PersonajesComponent} from "./personajes/personajes.component";

@NgModule({
  declarations: [
    PagesComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterOutlet,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
