import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class SeccionService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadSecciones = new EventEmitter<any>();

    getAll(): Observable<SeccionInterface[]> {
        return this.http.get<SeccionInterface[]>(`${this.config.api}secciones`, this.config.header);
    }
    getById(id: number): Observable<SeccionInterface[]>{
        return this.http.get<SeccionInterface[]>(`${this.config.api}secciones/${id}`, this.config.header);
    }
    update(seccion: SeccionInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}secciones`, seccion, this.config.header);
    }
    create(seccion: SeccionInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}secciones`, seccion, this.config.header);
    }
    delete(seccion: SeccionInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}secciones/${seccion.id}`, this.config.header);
    }
}