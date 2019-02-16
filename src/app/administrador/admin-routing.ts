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

export const routes: Routes = [
    {
        path: "admin",
        component: AdministradorComponent,
        children: [
            {
                path: "inicio",
                component: IndexadminComponent,
                canLoad: [AuthAdmin],
                data: { id: 1 }
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
                        data: { id: 1 }
                    },
                    {
                        path: "categoria",
                        component: CategoriaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    },
                    {
                        path: "imagen",
                        component: ImagenComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    },
                    {
                        path: "seccion",
                        component: SeccionComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    },
                    {
                        path: "sugerencia",
                        component: SugerenciaComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    },
                    {
                        path: "tipousuario",
                        component: TipousuarioComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    },
                    {
                        path: "usuario",
                        component: UsuarioComponent,
                        canLoad: [AuthAdmin],
                        data: { id: 1 }
                    }
                ],
                canLoad: [AuthAdmin],
                data: { id: 1 }
            }
        ],
        canActivate: [AuthAdmin],
        data: { id: 1 }
    }
];