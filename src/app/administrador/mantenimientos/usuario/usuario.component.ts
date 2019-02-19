import { ConfigService } from './../../../service/config/config.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService]
})
export class UsuarioComponent implements OnInit {

  constructor(private sql: UsuarioService, private messageService: MessageService, private config: ConfigService) {
    sql.reloadUsuarios.subscribe(
      () => this.getData()
    )
  }
  usuarios: UsuarioInterface[];


  ngOnInit() {
    this.getData();
  }


  formatDate(millis, hour){
    if(hour == true){
      return this.config.miliToDateTime(millis);
    }else{
      return this.config.miliToDate(millis);
    }
    
  }


  getData(): void {
    this.sql.getAll().subscribe(
      data => this.usuarios = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
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
