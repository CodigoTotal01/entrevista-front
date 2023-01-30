import {Injectable} from '@angular/core';
import {HttpClient, HttpInterceptor} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Personaje} from "../models/personaje.model";
import {delay} from "rxjs";


const url_rick_morty = environment.url_rick_morty

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(public http: HttpClient) {
  }

  //Por default trae 20 personajes, definido por el propio servicio de https://rickandmortyapi.com/
  cargarPersonajesAPI() {
    const url = `${url_rick_morty}/character`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        const personajes = resp.results.map((personaje: any) => {
          const {name: nombre,status: estado, species: especie, gender: genero, image: img } = personaje;
          return new Personaje(nombre, especie, genero, estado,img);
          }
        );
        return personajes;
        }
      )
    )
  }

  buscarPersonajeGlobal(termino: string){
    const url = `${url_rick_morty}/character/?name=${termino}`;
    return this.http.get(url).pipe(
      delay(2500),
      map((resp: any) => {
          const personajes = resp.results.map((personaje: any) => {
              const {name: nombre,status: estado, species: especie, gender: genero, image: img } = personaje;
              return new Personaje(nombre, especie, genero, estado,img);
            }
          );
          return personajes;
        }
      )
    )

  }


}
