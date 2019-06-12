import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private configAPI: ConfigService) { }

    usuario: UsuarioInterface;

    login(usuario: UsuarioInterface): Observable<UsuarioInterface> {
        return this.http.post<UsuarioInterface>(`${this.configAPI.api}login`, usuario, this.configAPI.header);
    }

    check(): Observable<UsuarioInterface> {
        return this.http.get<UsuarioInterface>(`${this.configAPI.api}check`, this.configAPI.header);
    }

    setUsuario(usuario: UsuarioInterface) {
        this.usuario = usuario;
    }

    logout() {
        this.usuario = null;
        this.http.get(`${this.configAPI.api}logout`, this.configAPI.header).subscribe();
    }

    registrar(usuario: UsuarioInterface): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(`${this.configAPI.api}registrar`, usuario, this.configAPI.header);
    }

    confirmUsuario(login: String, token: String): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(`${this.configAPI.api}confirm/${login}/${token}`, this.configAPI.header);
    }
    checkUsernameAvailability(login: String): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(`${this.configAPI.api}check-username-availability/${login}`, this.configAPI.header);
    }
    checkEmailAvailability(email: String): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(`${this.configAPI.api}check-email-availability/${email}`, this.configAPI.header);
    }
}