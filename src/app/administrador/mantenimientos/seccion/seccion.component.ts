import { Component, OnInit } from '@angular/core';
import { SeccionService } from 'src/app/service/seccion/seccion.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  constructor(private sql: SeccionService, private messageService: MessageService) {
    sql.reloadSecciones.subscribe(
      data => this.getData()
    )
  }
  secciones: SeccionInterface[];

  parentMessage = false;
  padre: Subject<SeccionInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.secciones = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(seccion: SeccionInterface): void {
    this.padre.next(seccion);
    this.parentMessage = true;
  }
  
  delete(data: SeccionInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadSecciones.emit();
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
