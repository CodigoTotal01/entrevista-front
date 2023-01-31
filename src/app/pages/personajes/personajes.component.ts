import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";
import {PersonajeAgregar} from "../../interfaces/personaje-agregar.interface";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  public totalPersonajes: number = 0;
  public personajes: Personaje[] = [];
  public personajeTemporal: Personaje[] = [];
  public cargando: boolean = true;

  public personajesGuardados:PersonajeAgregar[] = [];


  constructor(private personajeService: PersonajesService,
  ) {
  }


  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.cargando = true;
   this.personajesGuardadosUsuario();
    this.personajeService.cargarPersonajesAPI().subscribe(

      personajes => {


        this.personajes = personajes;
        this.totalPersonajes = personajes.length;
        this.cargando = false;

      }
    );
  }

  personajesGuardadosUsuario(){
    this.personajeService.personajesDelUsuario().subscribe((resp: any) => {
      this.personajesGuardados = resp.personajes;
    })

  }




  buscar(termino: string) {
    this.cargando = true;
    if (termino.length === 0) {
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
