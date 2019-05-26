import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { Message, MessageService, ConfirmationService } from 'primeng/api';
import { LoginService } from 'src/app/service/login/login.service';
import { Roles } from '../../enum/roles.enum';
import { Seccion } from '../../enum/secciones.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class HomeComponent implements OnInit {

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

  anuncios: ArticuloInterface[];
  usuarioSession: UsuarioInterface;
  msgs: Message[] = [];


  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.usuarioSession = this.login.usuario;
    this.getData();
  }


  getData(): void {
    this.articuloSQL.getAllBySeccion(Seccion.ANUNCIOS).subscribe(
      data => this.anuncios = data,
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

  canEdit(anuncio) {
    if (this.canCreate()) {
      return true;
    } else {
      if(anuncio.id_usuario && this.usuarioSession.id == anuncio.id_usuario.id){
        return true;
      }
      return false;
    }
  }

  canCreate(){
    if(this.usuarioSession && this.usuarioSession.id_tipo_usuario.id === Roles.ADMIN) {
      return true;
    }else{
      return false;
    }
  }

  goToEdit(idAnuncio){
    if(this.usuarioSession.id_tipo_usuario.id === Roles.ADMIN){
      this.router.navigate(['/admin/mantenimiento/articuloedit/'+idAnuncio]);
    }else{
      this.router.navigate(['/user/articuloedit/'+idAnuncio]);
    }
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

  // Confirmación del dialogo de borrar anuncio
  confirm(anuncio: ArticuloInterface) {
    this.msgs = [];
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar el anuncio "' + anuncio.titulo + '"?',
      accept: () => {
        this.delete(anuncio);
        this.showTooltip('success', 'Borrrado', 'Anuncio eliminado correctamente');    
      },
      reject: () => {
        this.showTooltip('warn', 'Operación cancelada', 'Anuncio no eliminado');
      }
    });
  }
}
