import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Usuario} from "../models/usuario.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RegisterForm} from "../interfaces/register-form.interface";
import {tap} from "rxjs";
import {LoginForm} from "../interfaces/login-form.interface";

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public usuario!: Usuario;

  constructor(private http: HttpClient, private router: Router) { }

  get token(): string {
    return localStorage.getItem('token') || '';

  }

  get uid(): string{
    return this.usuario.uid || '';
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap(
        (resp: any) => {
          this.guardarLocalStorage('token', resp.token)
        }
      )
    );
  }

  guardarLocalStorage(clave: string, valor: string){
    localStorage.setItem(clave, valor);
  }

  login( formData: LoginForm ) {
    return this.http.post(`${ base_url }/login`, formData )
      .pipe(
        tap( (resp: any) => {
          console.log(resp.token )
          this.guardarLocalStorage('token', resp.token )
        })
      );

  }

}

