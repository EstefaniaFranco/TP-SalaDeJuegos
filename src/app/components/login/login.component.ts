import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  OnRegister(){
    // this.authService
    // .login(this.correo, this.contrasenia)
    // .then((response) => {
    //   this.router.navigate(["/principal"]);
    // })
    // .catch((error) => (this.mensaje = error));
  }


  OnSignIn(){
    // this.authService.login(this.usuario, this.clave).then(res => {
    //   this.router.navigate(['/Principal']);
    // }).catch(err => alert('Usuario o Contraseña incorrectas'))
  }
}
