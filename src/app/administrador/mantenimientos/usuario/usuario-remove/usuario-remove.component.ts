import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario-remove',
  templateUrl: './usuario-remove.component.html',
  styleUrls: ['./usuario-remove.component.css'],
  providers: [MessageService]
})
export class UsuarioRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
