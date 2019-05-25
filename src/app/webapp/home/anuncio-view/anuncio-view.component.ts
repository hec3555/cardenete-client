import { Component, OnInit, HostListener } from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { LoginService } from 'src/app/service/login/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-anuncio-view',
  templateUrl: './anuncio-view.component.html',
  styleUrls: ['./anuncio-view.component.css'],
  providers: [MessageService]
})
export class AnuncioViewComponent implements OnInit {

  constructor(
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private login: LoginService
  ) { }

  usuarioSession: UsuarioInterface;
  articulo: ArticuloInterface;
  fecha: String;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.articuloService.getById(data.id).subscribe(
        data => this.putArticulo(data)
      )
    })
  }

  putArticulo(articulo: ArticuloInterface): void {
    this.articulo = articulo;
    this.fecha = this.config.miliToDate(new Date(this.articulo.fecha));
    this.usuarioSession = this.login.usuario;
  }


  formatDate(fecha: string | number, time: boolean) {
    if (time === true) {
      return this.config.miliToDateTime(new Date(fecha));
    } else {
      return this.config.miliToDate(new Date(fecha));
    }
  }
}
