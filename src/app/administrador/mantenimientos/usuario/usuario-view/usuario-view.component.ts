import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config/config.service';
@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css'],
  providers: [MessageService]
})
export class UsuarioViewComponent implements OnInit {

  constructor(
    private usuarioSQL: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigService
  ) { }

  usuario: UsuarioInterface;
  fecha_alta: String;
  fecha_nacimiento: String;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.usuarioSQL.getById(data.id).subscribe(
        data => this.putUsuario(data)
      )
    })
  }

  putUsuario(usuario: UsuarioInterface): void {
    this.usuario = usuario;
    this.fecha_nacimiento = this.config.miliToDate(new Date(this.usuario.fecha_nacimiento));
  }

}
