import { Component, OnInit } from '@angular/core';

import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/service/login/login.service';
import { Roles } from '../../enum/roles.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  constructor(
    private articuloSQL: ArticuloService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
    private config: ConfigService,
    private login: LoginService,
  ) {
    articuloSQL.reloadArticulos.subscribe(
      () => this.getData()
    )
  }

  anuncios: ArticuloInterface[];
  usuarioSession: UsuarioInterface;

  es: any;

  ngOnInit() {
    this.es = this.config.formatoFechaDatePicker;
    this.usuarioSession = this.login.usuario;
    this.getData();
  }


  getData(): void {
    this.articuloSQL.getAllBySeccion(2).subscribe(
      data => this.anuncios = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  formatDate(fecha: string | number, time: boolean) {
    if(time === true){
      return this.config.miliToDateTime(new Date(fecha));
    }else{
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

  canEdit(){
    if(this.usuarioSession){
      if(this.usuarioSession.id_tipo_usuario.id === Roles.ADMIN){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
}
