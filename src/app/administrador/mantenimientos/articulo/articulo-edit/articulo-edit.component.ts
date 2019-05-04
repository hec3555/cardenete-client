import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { SeccionService } from 'src/app/service/seccion/seccion.service';

@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css'],
  providers: [MessageService]
})
export class ArticuloEditComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private articuloService: ArticuloService,
    private usuarioService: UsuarioService,
    private seccionService: SeccionService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService
  ) { }

  secciones: SeccionInterface[];
  seccionSeleccionada: SeccionInterface;
  usuarios: UsuarioInterface[];
  usuarioSeleccionado: UsuarioInterface;
  articuloSeleccionado: ArticuloInterface;

  formularioArticuloEdit: FormGroup;

  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.route.params.subscribe(data => {
      this.articuloService.getById(data.id).subscribe(
        data => this.putArticuloForm(data)
      )
    })

    this.getSecciones();
    this.getUsuarios();

    this.formularioArticuloEdit = new FormGroup({
      id: new FormControl({value: '',disabled: true},[]),
      titulo: new FormControl('', [Validators.required]),
      desc: new FormControl('', []),
      fecha: new FormControl('', [Validators.required]),
      articulo: new FormControl('', [Validators.required]),
      etiquetas: new FormControl('', []),
      id_seccion: new FormControl('', [Validators.required]),
      id_usuario: new FormControl('', [Validators.required])
    })
  }

  putArticuloForm(articulo: ArticuloInterface): void {

    this.usuarioSeleccionado = articulo.id_usuario;
    this.seccionSeleccionada = articulo.id_seccion;
    this.articuloSeleccionado = articulo;

    this.formularioArticuloEdit.patchValue({
      id: articulo.id,
      titulo: articulo.titulo,
      desc: articulo.desc,
      fecha: new Date(Date.parse(articulo.fecha.toString())),
      articulo: articulo.articulo,
      etiquetas: articulo.etiquetas,
      id_seccion: this.seccionSeleccionada,
      id_usuario: this.usuarioSeleccionado
    })
  }

  editArticulo(): void {

    const articulo: ArticuloInterface = this.formularioArticuloEdit.value;
    console.log(articulo);

    articulo.id = this.articuloSeleccionado.id;

    this.articuloService.update(articulo).subscribe(
      (response: ResponseInterface) => {
        this.showTooltip('Articulo editado correctamente', '', `${response.msg}`)
        this.articuloService.reloadArticulos.emit();
        this.router.navigate(['..'], {relativeTo: this.route});
      },
      (error: ResponseInterface) => {
        this.showTooltip('error', '', `Error editando el usuario`)
      }
    )
  }

  getUsuarios(): void{
    this.usuarioService.getAll().subscribe(
      (usuario: UsuarioInterface[]) => {
        this.usuarios = usuario;
      }
    )
  }

  getSecciones(): void{
    this.seccionService.getAll().subscribe(
      (seccion: SeccionInterface[]) => {
        this.secciones = seccion;
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
