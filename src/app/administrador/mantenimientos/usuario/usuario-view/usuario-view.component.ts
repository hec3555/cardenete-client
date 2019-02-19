import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.css'],
  providers: [MessageService]
})
export class UsuarioViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
