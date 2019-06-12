import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth-components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceModule } from './service/service.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorModule } from './administrador/administrador.module';
import { WebappComponent } from './webapp/webapp.component';
import { WebappModule } from './webapp/webapp.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioModule } from './usuario/usuario.module';

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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';

/* FROALA EDITOR */
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FooterComponent } from './footer/footer.component';
import { RegistrarComponent } from './auth-components/registrar/registrar.component';
import { ConfirmarCuentaComponent } from './auth-components/confirmar-cuenta/confirmar-cuenta.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdministradorComponent,
    UsuarioComponent,
    WebappComponent,
    FooterComponent,
    RegistrarComponent,
    ConfirmarCuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AdministradorModule,
    WebappModule,
    UsuarioModule,
    ServiceModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OverlayPanelModule,
    DialogModule,
    ToastModule,
    MessageModule,
    EditorModule,
    CalendarModule,
    InputSwitchModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MatProgressSpinnerModule,
    ProgressSpinnerModule,
    BlockUIModule,
    ButtonModule,
    MessagesModule,
    ScrollPanelModule,
    TooltipModule,
    InputMaskModule,
    ChartModule,
    InputTextModule,
    ListboxModule,
    SelectButtonModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
