import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { LoginService } from './login.service';

import { Observable } from 'rxjs';
import { isUndefined } from 'util';
import { Roles } from 'src/app/enum/roles.enum';

@Injectable({ providedIn: "root" })
export class AuthAdmin implements CanLoad, CanActivate {

    constructor(private login: LoginService, private router: Router) { }


    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const id = route.data.id;
        console.log("AuthGuard->CanLoad:", route, this.isAdmin(id), `Permiso requerido para entrar: ${id}`);
        return this.isAdmin(id);
    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        const id = next.data.id;
        if(id === Roles.ADMIN){
            return this.isAdmin(id);
        }else if(id === Roles.USER){
            return this.isUsuario(id);
        }
    }

    isAdmin(data: number) {
        if (!isUndefined(this.login.usuario) && this.login.usuario.id_tipo_usuario.id === data) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }

    isUsuario(data: number){
        if (!isUndefined(this.login.usuario) && this.login.usuario.id_tipo_usuario.id === data) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}