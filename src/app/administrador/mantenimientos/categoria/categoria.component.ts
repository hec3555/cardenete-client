import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private sql: CategoriaService, private messageService: MessageService) {
    sql.reloadCategorias.subscribe(
      data => this.getData()
    )
  }
  categorias: CategoriaInterface[];

  parentMessage = false;
  padre: Subject<CategoriaInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.categorias = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(categoria: CategoriaInterface): void {
    this.padre.next(categoria);
    this.parentMessage = true;
  }
  
  delete(data: CategoriaInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadCategorias.emit();
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
