import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  constructor(
    private usuarioService: UsuariosService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  //formulario -> agirnar form html -> [formgroup]
  public registerForm = this.fb.group({
      //como lucira mi formulario valor - validacion
      nombre: ["", [Validators.required]],
      nickname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", Validators.required],
      password2: ["", Validators.required],
      terminos: [true, Validators.required]
    },
    //validadores - validadores asincronos
    {
      validators: this.passwordIguales("password", "password2")
    }
  );

  //usuario
  crearUsuario(){
    this.formSubmitted = true;

    if (this.registerForm.invalid) {

      return ;
    }

    this.usuarioService.crearUsuario(this.registerForm.value).subscribe((resp: any) => {
      Swal.fire('Succes', `${resp.usuario.nombre}, Hola! :D`, 'success');
      // Navegar al Dashboard
      this.router.navigateByUrl('/');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    })

  }


  // Validaciones
  passwordIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      if(pass1Control?.value  === pass2Control?.value){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noEsIgual: true});
      }
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }


  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

 campoNoValido( campo: string ): boolean {
    if ( this.registerForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }





}
