import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { routes } from './user-routing';


import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderUserComponent } from './header-user/header-user.component';


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
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
    declarations: [
        HeaderUserComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatProgressSpinnerModule,
        ProgressSpinnerModule,
        BlockUIModule,
        DialogModule,
        ButtonModule,
        ToastModule,
        ReactiveFormsModule,
        OverlayPanelModule,
        MessagesModule,
        MessageModule,
        FormsModule,
        ScrollPanelModule,
        TooltipModule,
        CalendarModule,
        ChartModule,
        InputTextModule,
        InputSwitchModule,
        ListboxModule,
        SelectButtonModule,
        ConfirmDialogModule
    ],
    exports: [
        HeaderUserComponent
    ]
})
export class UsuarioModule { }