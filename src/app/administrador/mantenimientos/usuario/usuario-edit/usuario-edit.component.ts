import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipousuarioService } from 'src/app/service/tipousuario/tipousuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config/config.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers: [MessageService]
})
export class UsuarioEditComponent implements OnInit {
  
  constructor(
    private messageService: MessageService,
    private usuarioSQL: UsuarioService,
    private tipousuarioService: TipousuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService
    ) { }

  formularioUsuarioEdit: FormGroup;
  
  tipousuarios: TipousuarioInterface[];

  tipousuarioSeleccionado: TipousuarioInterface;
  usuarioSeleccionado: UsuarioInterface;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.usuarioSQL.getById(data.id).subscribe(
        data => this.putUsuarioForm(data)
      )
    })
    this.tipoUsuario();
    this.formularioUsuarioEdit = new FormGroup({
      id: new FormControl({value: '',disabled: true},[]),
      nombre: new FormControl('', [Validators.required]),
      ape1: new FormControl('', [Validators.required]),
      ape2: new FormControl('', []),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      fecha_alta: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', []),
      email: new FormControl('', [Validators.email]),
      confirmado: new FormControl('', []),
      id_tipo_usuario: new FormControl('', [Validators.required])
    })
  }

  putUsuarioForm(usuario: UsuarioInterface): void {

    this.tipousuarioSeleccionado = usuario.id_tipo_usuario;
    this.usuarioSeleccionado = usuario;

    this.formularioUsuarioEdit.patchValue({
      id: usuario.id,
      nombre: usuario.nombre,
      ape1: usuario.ape1,
      ape2: usuario.ape2,
      fecha_nacimiento: new Date(Date.parse(usuario.fecha_nacimiento.toString())),
      fecha_alta: new Date(Date.parse(usuario.fecha_alta.toString())),
      login: usuario.login,
      pass: usuario.pass,
      email: usuario.email,
      confirmado: usuario.confirmado,
      id_tipo_usuario: this.tipousuarioSeleccionado
    })
  }

  editUsuario(): void {

    const usuario: UsuarioInterface = this.formularioUsuarioEdit.value;
    console.log(usuario);
    if(!usuario.pass){
      usuario.pass = '';
    }
    usuario.id = this.usuarioSeleccionado.id;

    this.usuarioSQL.update(usuario).subscribe(
      (response: ResponseInterface) => {
        this.showTooltip('Usuario editado correctamente', '', `${response.msg}`)
        this.usuarioSQL.reloadUsuarios.emit();
        this.router.navigate(['../../usuario'], {relativeTo: this.route});
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
