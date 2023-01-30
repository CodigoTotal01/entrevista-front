import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import {PersonajesComponent} from "./pages/personajes/personajes.component";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'personajes', component: PersonajesComponent },
      { path: '', redirectTo: '/personajes', pathMatch: 'full' },
    ]
  },

  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },

  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
