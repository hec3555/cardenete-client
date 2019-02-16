import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { ImagenService } from 'src/app/service/imagen/imagen.service';
import { LoginService } from './login/login.service';
import { AuthAdmin } from './login/auth.service';
import { NgModule } from '@angular/core';
import { ArticuloService } from './articulo/articulo.service';
import { CategoriaService } from './categoria/categoria.service';
import { SeccionService } from './seccion/seccion.service';
import { SugerenciaService } from './sugerencia/sugerencia.service';
import { TipousuarioService } from './tipousuario/tipousuario.service';

@NgModule({
    providers: [
        LoginService,
        AuthAdmin,
        ArticuloService,
        CategoriaService,
        ImagenService,
        SeccionService,
        SugerenciaService,
        TipousuarioService,
        UsuarioService
    ],
})
export class ServiceModule { }