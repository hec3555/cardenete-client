import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { sha256 } from 'js-sha256';
import { Roles } from 'src/app/enum/roles.enum';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [MessageService]
})
export class RegistrarComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService
  ) { }

  formularioUsuarioNew: FormGroup;
  
  tipousuario: TipousuarioInterface = {
    id: Roles.USER,
    desc: 'Usuario'
  };

  tipousuarioSeleccionado: TipousuarioInterface;
  usuarioSeleccionado: UsuarioInterface;

  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.formularioUsuarioNew = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      ape1: new FormControl('', [Validators.required]),
      ape2: new FormControl('', []),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required])
    })
  }

  createUsuario(): void {

    const usuario: UsuarioInterface = this.formularioUsuarioNew.value;
    console.log(usuario);
    usuario.id = 0;
    usuario.fecha_alta = new Date();

    usuario.pass = sha256(usuario.pass.toString())

    usuario.id_tipo_usuario = this.tipousuario;

    usuario.confirmado = false;

    this.loginService.registrar(usuario).subscribe(
      (response: ResponseInterface) => {
        this.showTooltip('Success', 'Completado', 'Por favor, confirme su correo electrónico antes de iniciar sesión')
        this.router.navigate(['/login']);
      },
      (error: ResponseInterface) => {
        this.showTooltip('error', '', `Error creando el usuario`)
      }
    )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
