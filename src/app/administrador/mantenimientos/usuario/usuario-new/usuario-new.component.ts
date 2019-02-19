import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css'],
  providers: [MessageService]
})
export class UsuarioNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
