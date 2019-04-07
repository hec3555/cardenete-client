import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { routes } from './webapp-routing';


import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';




@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatProgressSpinnerModule
    ],
    exports: [

    ]
})
export class WebappModule { }