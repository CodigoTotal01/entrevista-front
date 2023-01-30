import {Injectable} from '@angular/core';
import {HttpClient, HttpInterceptor} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Personaje} from "../models/personaje.model";


const url_rick_morty = environment.url_rick_morty

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(public http: HttpClient) {
  }

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


}
