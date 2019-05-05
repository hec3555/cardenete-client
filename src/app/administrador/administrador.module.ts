import { NgModule } from "@angular/core";
import { IndexadminComponent } from "./indexadmin/indexadmin.component";
import { HeaderAdminComponent } from "./header-admin/header-admin.component";
import { RouterModule } from '@angular/router';
import { routes } from './admin-routing';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';


import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//https://www.primefaces.org/primeng
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';



//mantenimientos
import { ArticuloComponent } from './mantenimientos/articulo/articulo.component';
import { CategoriaComponent } from './mantenimientos/categoria/categoria.component';
import { ImagenComponent } from './mantenimientos/imagen/imagen.component';
import { SeccionComponent } from './mantenimientos/seccion/seccion.component';
import { SugerenciaComponent } from './mantenimientos/sugerencia/sugerencia.component';
import { TipousuarioComponent } from './mantenimientos/tipousuario/tipousuario.component';
import { MantenimientoUsuarioComponent } from './mantenimientos/usuario/MantenimientoUsuario.component';
import { UsuarioEditComponent } from './mantenimientos/usuario/usuario-edit/usuario-edit.component';
import { UsuarioViewComponent } from './mantenimientos/usuario/usuario-view/usuario-view.component';
import { UsuarioNewComponent } from './mantenimientos/usuario/usuario-new/usuario-new.component';
import { ArticuloEditComponent } from './mantenimientos/articulo/articulo-edit/articulo-edit.component';

/* FROALA EDITOR */
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    declarations: [
        IndexadminComponent,
        HeaderAdminComponent,
        MantenimientosComponent,
        ArticuloComponent,
        CategoriaComponent,
        ImagenComponent,
        SeccionComponent,
        SugerenciaComponent,
        TipousuarioComponent,
        MantenimientoUsuarioComponent,
        UsuarioEditComponent,
        UsuarioViewComponent,
        UsuarioNewComponent,
        ArticuloEditComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        MatProgressSpinnerModule,
        ProgressSpinnerModule,
        BlockUIModule,
        DialogModule,
        ButtonModule,
        ToastModule,
        ReactiveFormsModule,
        OverlayPanelModule,
        MessagesModule,
        MessageModule,
        FormsModule,
        ScrollPanelModule,
        TooltipModule,
        CalendarModule,
        ChartModule,
        InputTextModule,
        InputSwitchModule,
        ListboxModule,
        SelectButtonModule,
        ConfirmDialogModule,
        EditorModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ],
    exports: [
        HeaderAdminComponent
    ]
})
export class AdministradorModule { }