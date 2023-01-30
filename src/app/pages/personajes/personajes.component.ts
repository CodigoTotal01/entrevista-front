import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit, OnDestroy {
  public totalPersonajes: number = 0;
  public personajes: Personaje[]= [];
  public personajeTemporal: Personaje[] =[];
  public cargando: boolean = true;

  public imgSubs!: Subscription;

  constructor(private personajeService: PersonajesService) { }

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }
  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(){
    this.cargando = true;
    this.personajeService.cargarPersonajesAPI().subscribe(
      personajes => {
        this.personajes = personajes;
        this.totalPersonajes = personajes.length;
        this.cargando = false;
      }
    );
  }







}
