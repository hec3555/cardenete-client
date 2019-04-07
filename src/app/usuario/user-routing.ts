import { AuthAdmin } from '../service/login/auth.service';
import { UsuarioComponent } from "./usuario.component";
import { Routes } from '@angular/router';

import { Roles } from '../enum/roles.enum';


// ESTAS RUTAS SERÁN PARA GESTIONAR COSAS DEL PROPIO USUARIO COMO LOGEADO (su perfil de usu, cambio de pass, fotos suyas, etc.)
export const routes: Routes = [
    {
        path: "user",
        component: UsuarioComponent,
        children: [
            /* {
                path: "inicio",
                component: IndexadminComponent,
                canLoad: [AuthAdmin],
                data: { id: Roles.USER }
            } */
        ],
        canActivate: [AuthAdmin],
        data: { id: Roles.USER }
    }
];