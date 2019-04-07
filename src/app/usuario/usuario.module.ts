import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { routes } from './user-routing';


import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatProgressSpinnerModule
    ],
    exports: [
        
    ]
})
export class UsuarioModule { }