import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth-components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorModule } from './administrador/administrador.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ServiceModule } from './service/service.module';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdministradorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdministradorModule,
    ServiceModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OverlayPanelModule,
    DialogModule,
    ToastModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
