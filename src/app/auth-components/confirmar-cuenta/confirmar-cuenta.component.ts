import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/service/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-cuenta',
  templateUrl: './confirmar-cuenta.component.html',
  styleUrls: ['./confirmar-cuenta.component.css'],
  providers: [MessageService]
})
export class ConfirmarCuentaComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe(data => {
      this.loginService.confirmUsuario(data.login, data.token).subscribe(
        data => this.usuarioConfirmed(data.msg)
      )
    })
  }


  usuarioConfirmed(msg: String){
    this.showTooltip("success", "Confirmado", msg)
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }



  showTooltip(type: string, title: string, desc: String) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
