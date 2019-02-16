import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class SugerenciaService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadSugerencias = new EventEmitter<any>();

    getAll(): Observable<SugerenciaInterface[]> {
        return this.http.get<SugerenciaInterface[]>(`${this.config.api}sugerencias`, this.config.header);
    }
    getById(id: number): Observable<SugerenciaInterface[]>{
        return this.http.get<SugerenciaInterface[]>(`${this.config.api}sugerencias/${id}`, this.config.header);
    }
    update(sugerencia: SugerenciaInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}sugerencias`, sugerencia, this.config.header);
    }
    create(sugerencia: SugerenciaInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}sugerencias`, sugerencia, this.config.header);
    }
    delete(sugerencia: SugerenciaInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}sugerencias/${sugerencia.id}`, this.config.header);
    }
}