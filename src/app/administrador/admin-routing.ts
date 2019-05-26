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
import { MantenimientoUsuarioComponent } from './mantenimientos/usuario/MantenimientoUsuario.component';
import { Roles } from '../enum/roles.enum';
import { UsuarioEditComponent } from './mantenimientos/usuario/usuario-edit/usuario-edit.component';
import { UsuarioViewComponent } from './mantenimientos/usuario/usuario-view/usuario-view.component';
import { UsuarioNewComponent } from './mantenimientos/usuario/usuario-new/usuario-new.component';
import { ArticuloEditComponent } from './mantenimientos/articulo/articulo-edit/articulo-edit.component';
import { ArticuloNewComponent } from './mantenimientos/articulo/articulo-new/articulo-new.component';

export const routes: Routes = [
    {
        path: "admin",
        component: AdministradorComponent,
        children: [
            /* {
                path: "inicio",
                component: IndexadminComponent,
                canLoad: [AuthAdmin],
                data: { id: Roles.ADMIN }
            }, */
            {
                path: "mantenimiento",
                component: MantenimientosComponent,
                children: [
                    /* MANTENIMIENTO ARTICULO */
                    {
                        path: "articulo",
                        component: ArticuloComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path:"articuloedit/:id",
                        component: ArticuloEditComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    {
                        path:"articulonew/:idSeccion",
                        component: ArticuloNewComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO CATEGORIA */
                    {
                        path: "categoria",
                        component: CategoriaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO IMAGEN */
                    {
                        path: "imagen",
                        component: ImagenComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO SECCION */
                    {
                        path: "seccion",
                        component: SeccionComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO SUGERENCIA */
                    {
                        path: "sugerencia",
                        component: SugerenciaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO TIPO USUARIO */
                    {
                        path: "tipousuario",
                        component: TipousuarioComponent,
                        canLoad: [AuthAdmin],
                        data: { id: Roles.ADMIN }
                    },
                    /* MANTENIMIENTO USUARIO */
                    {
                        path: "usuario",
                        component: MantenimientoUsuarioComponent,
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