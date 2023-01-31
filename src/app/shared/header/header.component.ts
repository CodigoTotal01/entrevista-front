import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Usuario} from "../../models/usuario.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent{

  public imgUrl = '';
  public usuario !: Usuario;
  constructor(private usuarioService: UsuariosService,
              private router: Router) {
    this.usuario = usuarioService.usuario;
    console.log("Lol", this.usuario.uid)
  }



  logout(){
    this.usuarioService.logout();
    this.router.navigateByUrl("/auth/login")
  }

  cargarImagenUsuario():string{
   return this.usuarioService.cargarImagen();
  }
}
