import { Component, OnInit } from '@angular/core';
import { SugerenciaService } from 'src/app/service/sugerencia/sugerencia.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css'],
  providers: [MessageService]
})
export class SugerenciaComponent implements OnInit {

  constructor(private sql: SugerenciaService, private messageService: MessageService) {
    sql.reloadSugerencias.subscribe(
      data => this.getData()
    )
  }
  sugerencias: SugerenciaInterface[];

  parentMessage = false;
  padre: Subject<SugerenciaInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.sugerencias = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(sugerencia: SugerenciaInterface): void {
    this.padre.next(sugerencia);
    this.parentMessage = true;
  }
  
  delete(data: SugerenciaInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadSugerencias.emit();
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
