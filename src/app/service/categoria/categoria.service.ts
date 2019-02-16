import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class CategoriaService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadCategorias = new EventEmitter<any>();

    getAll(): Observable<CategoriaInterface[]> {
        return this.http.get<CategoriaInterface[]>(`${this.config.api}categorias`, this.config.header);
    }
    getById(id: number): Observable<CategoriaInterface[]>{
        return this.http.get<CategoriaInterface[]>(`${this.config.api}categorias/${id}`, this.config.header);
    }
    update(categoria: CategoriaInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}categorias`, categoria, this.config.header);
    }
    create(categoria: CategoriaInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}categorias`, categoria, this.config.header);
    }
    delete(categoria: CategoriaInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}categorias/${categoria.id}`, this.config.header);
    }
}

