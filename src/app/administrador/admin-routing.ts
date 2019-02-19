import { CanLoad } from '@angular/router';
// import { HelpComponent } from './help/help.component';
import { AuthAdmin } from '../service/login/auth.service';
import { AdministradorComponent } from "./administrador.component";
import { IndexadminComponent } from "./indexadmin/indexadmin.component";
import { Routes } from '@angular/router';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

//Imports manteniminetos
import { ArticuloComponent } from './mantenimientos/articulo/articulo.component';
import { CategoriaComponent } from './mantenimientos/categoria/categoria.component';
import { ImagenComponent } from './mantenimientos/imagen/imagen.component';
import { SeccionComponent } from './mantenimientos/seccion/seccion.component';
import { SugerenciaComponent } from './mantenimientos/sugerencia/sugerencia.component';
import { TipousuarioComponent } from './mantenimientos/tipousuario/tipousuario.component';
import { UsuarioComponent } from './mantenimientos/usuario/usuario.component';
import { Roles } from '../enum/roles.enum';
import { UsuarioEditComponent } from './mantenimientos/usuario/usuario-edit/usuario-edit.component';
import { UsuarioRemoveComponent } from './mantenimientos/usuario/usuario-remove/usuario-remove.component';
import { UsuarioViewComponent } from './mantenimientos/usuario/usuario-view/usuario-view.component';
import { UsuarioNewComponent } from './mantenimientos/usuario/usuario-new/usuario-new.component';

export const routes: Routes = [
    {
        path: "admin",
        component: AdministradorComponent,
        children: [
            {
                path: "inicio",
                component: IndexadminComponent,
                canLoad: [AuthAdmin],
                data: { id: Roles.ADMIN }
            },
            {
                path: "mantenimiento",
                component: MantenimientosComponent,
                children: [
                    //   {
                    //     path: "inicio",
                    //     component: InicioComponentMantenimiento,
                    //     canLoad: [AuthAdmin],
                    //     data: { id: 1 }
                    //   },
                    {
                        path: "articulo",
                        component: ArticuloComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "categoria",
                        component: CategoriaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "imagen",
                        component: ImagenComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "seccion",
                        component: SeccionComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "sugerencia",
                        component: SugerenciaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "tipousuario",
                        component: TipousuarioComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path: "usuario",
                        component: UsuarioComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN },
                    },
                    {
                        path:"usuarioview/:id",
                        component: UsuarioViewComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path:"usuarioedit/:id",
                        component: UsuarioEditComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path:"usuarionew",
                        component: UsuarioNewComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    }
                ],
                canLoad: [AuthAdmin],
                data: { id: Roles.ADMIN }
            }
        ],
        canActivate: [AuthAdmin],
        data: { id: Roles.ADMIN }
    }
];