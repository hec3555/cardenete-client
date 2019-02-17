import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';
import { Roles } from '../../enum/roles.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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

    this.loginService.check().subscribe((usuario: UsuarioInterface) => {
      console.log(usuario);
    });
  }

  login(login: string, pass: string) {
    this.loginService
      .login(login, pass)
      .subscribe(data => {
        this.loginService.check().subscribe((usuario: UsuarioInterface) => {
          this.loginService.setUsuario(usuario);
          if(usuario.id_tipo_usuario.id == Roles.ADMIN){
            this.router.navigate(['/admin/inicio']);
          }else{
            this.router.navigate(['usuario/inicio']);
          }
        })
      },
        error => {
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
