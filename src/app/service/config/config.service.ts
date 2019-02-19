import { Injectable } from "@angular/core";
import * as moment from 'moment';
import { formatDate, DatePipe } from '@angular/common';

@Injectable({
    providedIn: "root"
})
export class ConfigService {
    constructor() { }

    private _api: string = "http://localhost:8081/cardenete-server/cardenete/";

    public get api(): string {
        return this._api;
    }

    public get header(): Object {
        const httpOptions = {
            withCredentials: true
        };
        return httpOptions;
    }

    // DatePicker de jesus
    formatoFechaDatePicker: any = {
        firstDayOfWeek: 1,
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        today: 'Hoy',
        clear: 'Borrar',
        dateFormat: 'dd/mm/yy'
    };

    

    // Para formatear fecha (de milisegundos a fecha / fecha+hora - en hora española)
    pipe = new DatePipe('en-US');

    miliToDate(data) {
        return this.pipe.transform(data, 'dd-MM-yyyy', 'Europe/Madrid');
    }

    miliToDateTime(data) {
        return this.pipe.transform(data, 'dd-MM-yyyy HH:mm:ss', 'Europe/Madrid');
    }
}