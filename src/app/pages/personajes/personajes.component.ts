import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  public totalPersonajes: number = 0;
  public personajes: Personaje[] = [];
  public personajeTemporal: Personaje[] = [];
  public cargando: boolean = true;


  constructor(private personajeService: PersonajesService,
  ) {
  }


  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.cargando = true;
    this.personajeService.cargarPersonajesAPI().subscribe(
      personajes => {
        this.personajes = personajes;
        this.totalPersonajes = personajes.length;
        this.cargando = false;
      }
    );
  }

  buscar(termino: string) {
    this.cargando = true;
    if (termino.length === 0) {
      //basicamente retorna un arreglo vasio
      this.personajes = this.personajeTemporal;
      this.cargarPersonajes();
      return;
    }
    this.personajeService.buscarPersonajeGlobal(termino).subscribe(personajes => {
        this.personajes = personajes;
        this.cargando = false;
      }
    )
  }


}
