import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NopagefoundComponent} from "./nopagefound/nopagefound.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [ //modulos
    BrowserModule,
    RouterOutlet,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
