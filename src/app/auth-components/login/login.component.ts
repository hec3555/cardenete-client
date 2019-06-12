import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';
import { Roles } from '../../enum/roles.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

/* SHA256 */
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  constructor(private messageService: MessageService, private loginService: LoginService, private router: Router) { }


  formularioLogin: FormGroup;


  ngOnInit() {
    this.formularioLogin = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    });
  }

  login(login: string, pass: string) {
    let usuario: UsuarioInterface = {
      id: null,
      nombre: '',
      ape1: '',
      ape2: '',
      login: login,
      pass: sha256(pass),
      fecha_nacimiento: null,
      fecha_alta: null,
      email: '',
      token: '',
      confirmado: false,
      id_tipo_usuario: null
    };

    this.loginService
      .login(usuario)
      .subscribe(
        data => {
          this.loginService.check().subscribe((usuario: UsuarioInterface) => {
            this.loginService.setUsuario(usuario);
            if(usuario.id_tipo_usuario.id == Roles.ADMIN){
              this.router.navigate(['/webapp/home']);
            }else{
              this.router.navigate(['/webapp/home']);
            }
          })
        },
        error => {
          console.log(error)
          this.showTooltip("error", "Login fallido", error.error.msg);
        });
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }


}
