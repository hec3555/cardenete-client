import { ConfigService } from './../../../service/config/config.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Message, MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  constructor(
    private sql: UsuarioService,
    private messageService: MessageService,
    private config: ConfigService,
    private confirmationService: ConfirmationService
  ) {
    sql.reloadUsuarios.subscribe(
      () => this.getData()
    )
  }

  usuarios: UsuarioInterface[];
  msgs: Message[] = [];

  ngOnInit() {
    this.getData();
  }


  formatDate(millis, hour) {
    if (hour == true) {
      return this.config.miliToDateTime(millis);
    } else {
      return this.config.miliToDate(millis);
    }

  }


  getData(): void {
    this.sql.getAll().subscribe(
      data => this.usuarios = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  // Confirmación del dialogo de borrar usuario
  confirm(usuario: UsuarioInterface) {
    this.msgs = [];
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar el usuario "' + usuario.nombre + ' ' + usuario.ape1 + '"?',
      accept: () => {
        this.delete(usuario);
        this.showTooltip('success', 'Borrrado', 'Usuario eliminado correctamente');    
      },
      reject: () => {
        this.showTooltip('warn', 'Operación cancelada', 'Usuario no eliminado');
      }
    });
  }

  delete(data: UsuarioInterface): void {
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadUsuarios.emit();
        this.showTooltip('success', '', `${data.msg}`)
      },
      error => {
        this.showTooltip('error', '', `${error.msg}`)
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
