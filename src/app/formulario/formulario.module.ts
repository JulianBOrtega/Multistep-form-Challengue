import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { LocalidadAutomcompleteComponent } from './localidad-automcomplete/localidad-automcomplete.component';
import { FormularioRoutingModule } from './formulario-routing.module';
import { MaterialModule } from '../shared/materials/material.module';

@NgModule({
  declarations: [
    ListarUsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    FormUsuarioComponent,
    TablaUsuarioComponent,
    LocalidadAutomcompleteComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    MaterialModule
  ]
})
export class FormularioModule { }
