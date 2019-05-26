import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { SeccionService } from 'src/app/service/seccion/seccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { LoginService } from 'src/app/service/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articulo-new',
  templateUrl: './articulo-new.component.html',
  styleUrls: ['./articulo-new.component.css'],
  providers: [MessageService]
})
export class ArticuloNewComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private articuloService: ArticuloService,
    private usuarioService: UsuarioService,
    private seccionService: SeccionService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private _location: Location,
    private login: LoginService
  ) { }

  usuarioSession: UsuarioInterface;
  secciones: SeccionInterface[];
  seccionSeleccionada: SeccionInterface;
  usuarios: UsuarioInterface[];
  usuarioSeleccionado: UsuarioInterface;
  articuloSeleccionado: ArticuloInterface;

  formularioArticuloNew: FormGroup;

  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.route.params.subscribe(data => {
      this.seccionService.getById(data.idSeccion).subscribe(
        data => this.putSeccion(data)
      )
    })

    this.usuarioSession = this.login.usuario;
    this.getUsuarios();

    this.formularioArticuloNew = new FormGroup({
      id: new FormControl({ value: '', disabled: true }, []),
      titulo: new FormControl('', [Validators.required]),
      desc: new FormControl('', []),
      fecha: new FormControl('', [Validators.required]),
      articulo: new FormControl('', [Validators.required]),
      etiquetas: new FormControl('', []),
      id_seccion: new FormControl('', [Validators.required]),
      id_usuario: new FormControl('', [Validators.required])
    })
  }


  putSeccion(seccion: SeccionInterface) {
    this.seccionSeleccionada = seccion;
    this.putArticuloForm();
  }

  putArticuloForm(): void {

    this.formularioArticuloNew.patchValue({
      id: null,
      titulo: '',
      desc: '',
      fecha: new Date(),
      articulo: '',
      etiquetas: '',
      id_seccion: this.seccionSeleccionada,
      id_usuario: null
    })
  }

  saveArticulo(): void {

    const articulo: ArticuloInterface = this.formularioArticuloNew.value;
    console.log(articulo);

    this.articuloService.create(articulo).subscribe(
      (response: ResponseInterface) => {
        this.showTooltip('Articulo creado correctamente', '', `${response.msg}`)
        this.articuloService.reloadArticulos.emit();
        this._location.back();
      },
      (error: ResponseInterface) => {
        this.showTooltip('error', '', `Error creando el articulo`)
      }
    )
  }

  getUsuarios(): void {
    this.usuarioService.getAll().subscribe(
      (usuario: UsuarioInterface[]) => {
        this.usuarios = usuario;
      }
    )
  }

  getSecciones(): void {
    this.seccionService.getAll().subscribe(
      (seccion: SeccionInterface[]) => {
        this.secciones = seccion;
      }
    )
  }

  backClicked() {
    this._location.back();
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
