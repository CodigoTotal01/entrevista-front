//interfas para obtener los usuarios

import {Personaje} from "../models/personaje.model";

export interface CargarPersonaje {
  total: number,
  personajes: Personaje[];
}
