import { Component, OnInit } from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";

@Component({
  selector: 'app-personajes-registrados',
  templateUrl: './personajes-registrados.component.html',
  styleUrls: ['./personajes-registrados.component.css']
})
export class PersonajesRegistradosComponent implements OnInit {

  constructor(private personajeServices: PersonajesService) { }

  ngOnInit(): void {
    this.cargarPersonajesDelUSuario();
  }


  cargarPersonajesDelUSuario(){
    this.personajeServices.personajesDelUsuario().subscribe(resp => {
      console.log(resp)
    });
  }



}
