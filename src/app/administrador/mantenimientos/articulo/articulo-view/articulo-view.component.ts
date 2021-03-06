import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-articulo-view',
  templateUrl: './articulo-view.component.html',
  styleUrls: ['./articulo-view.component.css'],
  providers: [MessageService]
})
export class ArticuloViewComponent implements OnInit {

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

}
