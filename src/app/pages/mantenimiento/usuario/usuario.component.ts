import { Component, OnInit } from '@angular/core';
import {FileUploadServiceService} from "../../../services/file-upload-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../../models/usuario.model";
import {UsuariosService} from "../../../services/usuarios.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  public perfilForm!: FormGroup;
  public usuario!: Usuario;
  public imagenSubir!: File;

  public imgTemp: any;

  constructor(private fb:FormBuilder, public usuarioService: UsuariosService, private fileUploadService: FileUploadServiceService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group(
      {
        nombre: [this.usuario.nombre, Validators.required],
        nickname: [this.usuario.nickname, [Validators.required]]
      }
    )
  }



  actualizarPerfil(){
    console.log(this.perfilForm.value)
    this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(resp=> {
      const {nombre, nickname} = this.perfilForm.value;
      //para mostrar los cambios de manera inmediata en cuanto nombres
      this.usuario.nombre =nombre;
      this.usuario.nickname = nickname;
      Swal.fire('Actualizado', "Se actualizo correctamente", 'success')
    }, (err :any) => {
      console.log(err)
      Swal.fire('Error', "El correo ya esta registrado", 'error')
    });
  }


  cambiarImagen(event: any): any{
    let file = (event.target as HTMLInputElement).files![0];
    this.imagenSubir = file;
    if(!file){
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    //transformar imagen de url a archivo
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }


  }
  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid!).then(img => {
      this.usuario.img = img
      this.usuarioService.cargarImagen();
      Swal.fire('Imagen subida', 'La imagen se subio correctamente', 'success')
    }).catch(err => {
      console.log(err)
      Swal.fire('Error al subir la imagen', 'Asegurece que el archivo sea una imagen', 'error')

    })
  }





}
