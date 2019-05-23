import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { routes } from './webapp-routing';


import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeComponent } from './home/home.component';

//https://www.primefaces.org/primeng
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';


import { AdministradorModule } from '../administrador/administrador.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { ArticuloViewComponent } from '../administrador/mantenimientos/articulo/articulo-view/articulo-view.component';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        ArticuloViewComponent,
        InformacionComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatProgressSpinnerModule,
        ProgressSpinnerModule,
        ConfirmDialogModule,
        InputSwitchModule,
        SelectButtonModule,
        AdministradorModule,
        UsuarioModule,
        ListboxModule,
        InputTextModule,
        ChartModule,
        CalendarModule,
        TooltipModule,
        ScrollPanelModule,
        BlockUIModule,
        BrowserModule,
        ButtonModule,
        FormsModule,
        MessagesModule,
        ReactiveFormsModule,
        OverlayPanelModule,
        DialogModule,
        ToastModule,
        MessageModule,
        EditorModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class WebappModule { }