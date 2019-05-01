import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';
import { Roles } from '../enum/roles.enum';

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
  
  roles: Roles;
  usuarioSession: UsuarioInterface;
  adminNavbar: Boolean = false;

  ngOnInit() {
    this.usuarioSession = this.login.usuario;

    if(this.usuarioSession && this.usuarioSession.id_tipo_usuario.id == Roles.ADMIN){
      this.adminNavbar = true;
    }
  }


  logout() {
    this.login.logout();
    this.router.navigate(['login'])
  }
}
