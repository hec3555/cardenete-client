import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo/articulo.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [MessageService]
})
export class ArticuloComponent implements OnInit {

  constructor(private sql: ArticuloService, private messageService: MessageService) {
    sql.reloadArticulos.subscribe(
      data => this.getData()
    )
  }
  articulos: ArticuloInterface[];

  parentMessage = false;
  padre: Subject<ArticuloInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.articulos = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(articulo: ArticuloInterface): void {
    this.padre.next(articulo);
    this.parentMessage = true;
  }
  
  delete(data: ArticuloInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadArticulos.emit();
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
