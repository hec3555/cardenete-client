import { HomeComponent } from "./home/home.component";
import { Routes } from '@angular/router';



// ESTAS RUTAS SERÁN PARA GESTIONAR COSAS DEL PROPIO USUARIO COMO LOGEADO (su perfil de usu, cambio de pass, fotos suyas, etc.)
export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    }
];