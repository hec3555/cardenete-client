import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadUsuarios = new EventEmitter<any>();

    getAll(): Observable<UsuarioInterface[]> {
        return this.http.get<UsuarioInterface[]>(`${this.config.api}usuarios`, this.config.header);
    }
    getById(id: number): Observable<UsuarioInterface[]>{
        return this.http.get<UsuarioInterface[]>(`${this.config.api}usuarios/${id}`, this.config.header);
    }
    update(usuario: UsuarioInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}usuarios`, usuario, this.config.header);
    }
    create(usuario: UsuarioInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}usuarios`, usuario, this.config.header);
    }
    delete(usuario: UsuarioInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}usuarios/${usuario.id}`, this.config.header);
    }
}