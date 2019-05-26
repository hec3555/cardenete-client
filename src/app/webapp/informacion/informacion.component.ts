import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { LoginService } from 'src/app/service/login/login.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Roles } from 'src/app/enum/roles.enum';
import { Seccion } from 'src/app/enum/secciones.enum';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class InformacionComponent implements OnInit {

  constructor(
    private articuloSQL: ArticuloService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private config: ConfigService,
    private login: LoginService,
    private confirmationService: ConfirmationService
  ) {
    articuloSQL.reloadArticulos.subscribe(
      () => this.getData()
    )
  }

  informacion: ArticuloInterface[];
  usuarioSession: UsuarioInterface;
  msgs: Message[] = [];


  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.usuarioSession = this.login.usuario;
    this.getData();
  }


  getData(): void {
    this.articuloSQL.getAllBySeccion(Seccion.INFORMACION).subscribe(
      data => this.informacion = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  formatDate(fecha: string | number, time: boolean) {
    if (time === true) {
      return this.config.miliToDateTime(new Date(fecha));
    } else {
      return this.config.miliToDate(new Date(fecha));
    }
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

  canEditOrCreate(){
    if(this.usuarioSession && this.usuarioSession.id_tipo_usuario.id === Roles.ADMIN) {
      return true;
    }else{
      return false;
    }
  }

  goToEdit(idAnuncio){
    this.router.navigate(['/admin/mantenimiento/articuloedit/'+idAnuncio]);
  }

  goToNew(){
    if(this.usuarioSession.id_tipo_usuario.id === Roles.ADMIN){
      this.router.navigate(['/admin/mantenimiento/articulonew/'+Seccion.ANUNCIOS]);
    }
  }

  delete(data: ArticuloInterface): void {
    this.articuloSQL.delete(data).subscribe(
      data => {
        this.articuloSQL.reloadArticulos.emit();
        this.showTooltip('success', '', `${data.msg}`)
      },
      error => {
        this.showTooltip('error', '', `${error.msg}`)
      }
    )
  }

  // Confirmación del dialogo de borrar informacion
  confirm(informacion: ArticuloInterface) {
    this.msgs = [];
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar el informacion "' + informacion.titulo + '"?',
      accept: () => {
        this.delete(informacion);
        this.showTooltip('success', 'Borrrado', 'Informacion eliminada correctamente');    
      },
      reject: () => {
        this.showTooltip('warn', 'Operación cancelada', 'informacion no eliminada');
      }
    });
  }

}
