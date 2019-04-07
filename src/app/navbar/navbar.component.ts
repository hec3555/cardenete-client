import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
