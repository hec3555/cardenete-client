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

/* PRIMENG */
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { EditorModule } from 'primeng/editor';

/* FROALA EDITOR */
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FooterComponent } from './footer/footer.component';
import { RegistrarComponent } from './auth-components/registrar/registrar.component';
import { ConfirmarCuentaComponent } from './auth-components/confirmar-cuenta/confirmar-cuenta.component';


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
    FormsModule,
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
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
