import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { TipousuarioService } from 'src/app/service/tipousuario/tipousuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/* SHA256 */
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css'],
  providers: [MessageService]
})
export class UsuarioNewComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private usuarioSQL: UsuarioService,
    private tipousuarioService: TipousuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService
  ) { }

  formularioUsuarioNew: FormGroup;
  
  tipousuarios: TipousuarioInterface[];

  tipousuarioSeleccionado: TipousuarioInterface;
  usuarioSeleccionado: UsuarioInterface;

  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.tipoUsuario();
    this.formularioUsuarioNew = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      ape1: new FormControl('', [Validators.required]),
      ape2: new FormControl('', []),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      confirmado: new FormControl('', []),
      id_tipo_usuario: new FormControl('', [Validators.required])
    })
  }

  createUsuario(): void {

    const usuario: UsuarioInterface = this.formularioUsuarioNew.value;
    console.log(usuario);
    usuario.id = 0;
    usuario.fecha_alta = new Date();

    usuario.pass = sha256(usuario.pass.toString())

    this.usuarioSQL.create(usuario).subscribe(
      (response: ResponseInterface) => {
        this.showTooltip('Usuario creado correctamente', '', `${response.msg}`)
        this.usuarioSQL.reloadUsuarios.emit();
        this.router.navigate(['/admin/mantenimiento/usuario']);
      },
      (error: ResponseInterface) => {
        this.showTooltip('error', '', `Error editando el usuario`)
      }
    )
  }

  tipoUsuario(): void{
    this.tipousuarioService.getAll().subscribe(
      (tipousuario: TipousuarioInterface[]) => {
        this.tipousuarios = tipousuario;
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
