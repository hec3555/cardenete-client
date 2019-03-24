import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipousuarioService } from 'src/app/service/tipousuario/tipousuario.service';
@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css'],
  providers: [MessageService]
})
export class UsuarioViewComponent implements OnInit {

  constructor(
    private usuarioSQL: UsuarioService,
    private tipousuarioService: TipousuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  usuario: UsuarioInterface;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.usuarioSQL.getById(data.id).subscribe(
        data => this.putUsuario(data)
      )
    })
  }

  putUsuario(usuario: UsuarioInterface): void {
    this.usuario = usuario;
  }

}
