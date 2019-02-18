import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/service/imagen/imagen.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],
  providers: [MessageService]
})
export class ImagenComponent implements OnInit {

  constructor(private sql: ImagenService, private messageService: MessageService) {
    sql.reloadImagenes.subscribe(
      data => this.getData()
    )
  }
  imagenes: ImagenInterface[];

  parentMessage = false;
  padre: Subject<ImagenInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.imagenes = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(imagen: ImagenInterface): void {
    this.padre.next(imagen);
    this.parentMessage = true;
  }
  
  delete(data: ImagenInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadImagenes.emit();
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
