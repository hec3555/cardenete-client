import { WebappComponent } from './webapp.component';
import { HomeComponent } from "./home/home.component";
import { Routes } from '@angular/router';
import { ArticuloViewComponent } from '../administrador/mantenimientos/articulo/articulo-view/articulo-view.component';



// ESTAS RUTAS SERÁN PARA LA WEB EN SÍ, TODOS PODRÁN ACCEDER A ELLA POR LO CUAL NO TIENE CANLOAD NI CANACTIVATE
export const routes: Routes = [
    {
        path: "webapp",
        component: WebappComponent,
        children: [
            {
                path: "home",
                component: HomeComponent
            },
            {
                path:"articuloview/:id",
                component: ArticuloViewComponent
            },
        ]
    }
];