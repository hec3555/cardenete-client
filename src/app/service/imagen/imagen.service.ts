import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class ImagenService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadImagenes = new EventEmitter<any>();

    getAll(): Observable<ImagenInterface[]> {
        return this.http.get<ImagenInterface[]>(`${this.config.api}imagenes`, this.config.header);
    }
    getById(id: number): Observable<ImagenInterface[]>{
        return this.http.get<ImagenInterface[]>(`${this.config.api}imagenes/${id}`, this.config.header);
    }
    update(imagen: ImagenInterface): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(`${this.config.api}imagenes`, imagen, this.config.header);
    }
    create(imagen: ImagenInterface) {
        return this.http.post<ResponseInterface>(`${this.config.api}imagenes`, imagen, this.config.header);
    }
    delete(imagen: ImagenInterface) {
        return this.http.delete<ResponseInterface>(`${this.config.api}imagenes/${imagen.id}`, this.config.header);
    }
}