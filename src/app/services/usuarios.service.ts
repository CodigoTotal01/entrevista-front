import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import {RegisterForm} from "../interfaces/register-form.interface";
import {LoginForm} from "../interfaces/login-form.interface";
import {Usuario} from "../models/usuario.model";

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

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );
  }



}

