import { Component, OnInit } from '@angular/core';
import { TipousuarioService } from 'src/app/service/tipousuario/tipousuario.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {

  constructor(private sql: TipousuarioService, private messageService: MessageService) {
    sql.reloadTipousuarios.subscribe(
      data => this.getData()
    )
  }
  tipousuarios: TipousuarioInterface[];

  parentMessage = false;
  padre: Subject<TipousuarioInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.tipousuarios = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(tipousuario: TipousuarioInterface): void {
    this.padre.next(tipousuario);
    this.parentMessage = true;
  }
  
  delete(data: TipousuarioInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadTipousuarios.emit();
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
