import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class ArticuloService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadArticulos = new EventEmitter<any>();

    getAll(): Observable<ArticuloInterface[]> {
        return this.http.get<ArticuloInterface[]>(`${this.config.api}articulos`, this.config.header);
    }

    getAllBySeccion(idSeccion: number): Observable<ArticuloInterface[]> {
        return this.http.get<ArticuloInterface[]>(`${this.config.api}articulos/seccion/${idSeccion}`, this.config.header);
    }

    getAllByUsuario(idUsuario: number): Observable<ArticuloInterface[]> {
        return this.http.get<ArticuloInterface[]>(`${this.config.api}articulos/usuario/${idUsuario}`, this.config.header);
    }

    getAllBySeccionAndUsuario(idSeccion: number, idUsuario: number): Observable<ArticuloInterface[]> {
        return this.http.get<ArticuloInterface[]>(`${this.config.api}articulos/seccion/${idSeccion}/usuario/${idUsuario}`, this.config.header);
    }

    getById(id: number): Observable<ArticuloInterface[]>{
        return this.http.get<ArticuloInterface[]>(`${this.config.api}articulos/${id}`, this.config.header);
    }
    update(articulo: ArticuloInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}articulos`, articulo, this.config.header);
    }
    create(articulo: ArticuloInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}articulos`, articulo, this.config.header);
    }
    delete(articulo: ArticuloInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}articulos/${articulo.id}`, this.config.header);
    }
}