import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private sql: UsuarioService, private messageService: MessageService) {
    sql.reloadUsuarios.subscribe(
      data => this.getData()
    )
  }
  usuarioes: UsuarioInterface[];

  parentMessage = false;
  padre: Subject<UsuarioInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.usuarioes = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(usuario: UsuarioInterface): void {
    this.padre.next(usuario);
    this.parentMessage = true;
  }
  
  delete(data: UsuarioInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadUsuarios.emit();
        this.showTooltip('success','',`${data.msg}`)
      },
      error => this.showTooltip('error','',`${error.msg}`)
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
