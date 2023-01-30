import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Personaje} from "../models/personaje.model";
import {HttpClient} from "@angular/common/http";

const url_rick_morty = environment.url_rick_morty;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http: HttpClient) { }


}
