import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-registrar-personaje',
  templateUrl: './registrar-personaje.component.html',
})
export class RegistrarPersonajeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prametros => {
      console.log(prametros)
    })
  }

}
