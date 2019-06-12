import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth-components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmarCuentaComponent } from './auth-components/confirmar-cuenta/confirmar-cuenta.component';
import { RegistrarComponent } from './auth-components/registrar/registrar.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'confirmar-cuenta/:login/:token', component: ConfirmarCuentaComponent },
  { path: '', redirectTo: 'webapp/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];





