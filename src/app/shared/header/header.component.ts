import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Usuario} from "../../models/usuario.model";
import {Router} from "@angular/router";
import {delay, Subscription} from "rxjs";
import {environment} from "../../../environments/environment";


const base_url = environment.base_url;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  public imgUrl: string = '';

  public imgSubs!: Subscription;

  public usuario !: Usuario;

  constructor(public usuarioService: UsuariosService,
              private router: Router) {
  }


  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl("/auth/login")
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.imgUrl = this.usuarioService.cargarImagen()

    this.imgSubs = this.usuarioService.nuevaImagen.pipe(
      delay(100)
    )
      .subscribe(img => {
        this.imgUrl = this.usuarioService.cargarImagen();
        console.log(this.imgUrl)
      });
  }

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

}
