import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  usuarioSession: UsuarioInterface;

  ngOnInit() {
    this.usuarioSession = this.login.usuario;
  }


  logout() {
    this.login.logout();
    this.router.navigate(['login'])
  }

}
