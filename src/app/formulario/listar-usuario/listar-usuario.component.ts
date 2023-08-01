import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { IUsuario } from '../models/userInfo';

@Component({
  selector: 'formulario-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})

export class ListarUsuarioComponent implements OnInit {

  public usuarios : IUsuario[] = [];
  cargando : boolean = false;

  constructor(private _usuarioService: UsuarioServiceService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
  console.log('Buscamos usuarios en la bd');
  
  this.cargando = true;

  const usuarioObs =   this._usuarioService.obtenerTodos().subscribe(
    
    (datos) => {
      this.usuarios = datos;
      this.cargando = false;
    },
    (error) => {
      console.log('[ERROR]', error);
      this.cargando = false;
    }
  );
  }
}
