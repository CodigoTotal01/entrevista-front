import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";
import {FormBuilder, Validators} from "@angular/forms";
import {PersonajeAgregar} from "../../interfaces/personaje-agregar.interface";
import Swal from "sweetalert2";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-registrar-personaje',
  templateUrl: './registrar-personaje.component.html',
})


export class RegistrarPersonajeComponent implements OnInit {

  public personajeTemp!: any;


  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private personajeService: PersonajesService) {
  }


  public registerPersonajeForm = this.fb.group({
    comentario: [ '' , [ Validators.required, Validators.email ] ],
    calificacion: [0, Validators.required ],
  });


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({nombre, img} ) => {
      this.personajeTemp = {
        nombre,
        img
      }
    })
  }




  agregarPersonaje(){
    if(this.registerPersonajeForm.get("comentario") && this.registerPersonajeForm.get("comentario")?.value != ''){
      const {comentario, calificacion} = this.registerPersonajeForm.value ;

      this.personajeTemp = {
        ...this.personajeTemp,
        comentario,
        calificacion
      }
      this.personajeService.agregarPersonaje(this.personajeTemp).subscribe(
        {
          next: (resp) => {
              Swal.fire('Añadido', `Se añadio el personaje de ${resp.personaje.nombre} a tu lista`, 'success')
              this.router.navigateByUrl('/personajes')
          },
          error: (err) => {
            Swal.fire('Error', `El personaje ya esta añadido en tu lista`, 'error')
            this.router.navigateByUrl('/personajes')
          }
        }
      );
    }
  }

  campoNoValido( campo: string ): boolean {
    if ( this.registerPersonajeForm.get(campo)?.invalid ) {
      return true;
    } else {
      return false;
    }
  }

}
