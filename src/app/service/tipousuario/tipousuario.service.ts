import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class TipousuarioService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadTipousuarios = new EventEmitter<any>();

    getAll(): Observable<TipousuarioInterface[]> {
        return this.http.get<TipousuarioInterface[]>(`${this.config.api}tipousuarios`, this.config.header);
    }
    getById(id: number): Observable<TipousuarioInterface[]>{
        return this.http.get<TipousuarioInterface[]>(`${this.config.api}tipousuarios/${id}`, this.config.header);
    }
    update(tipousuario: TipousuarioInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}tipousuarios`, tipousuario, this.config.header);
    }
    create(tipousuario: TipousuarioInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}tipousuarios`, tipousuario, this.config.header);
    }
    delete(tipousuario: TipousuarioInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}tipousuarios/${tipousuario.id}`, this.config.header);
    }
}