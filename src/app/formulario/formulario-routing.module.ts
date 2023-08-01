import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
    {
        path: '',
        component: ListarUsuarioComponent
    },
    {
        path: 'agregar',
        component: AgregarUsuarioComponent
    },
    {
        path: 'editar/:id',
        component: EditarUsuarioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormularioRoutingModule { }
