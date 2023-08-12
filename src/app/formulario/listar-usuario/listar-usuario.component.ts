import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/userInfo';
import { UsuarioService } from 'app/services/usuario-service.service';

@Component({
  selector: 'formulario-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})

export class ListarUsuarioComponent implements OnInit {

  public usuarios : IUsuario[] = [];
  cargando : boolean = false;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() 
  {
    console.log('Buscamos usuarios en la bd');  
    this.cargando = true;

    const usuarioObs = this._usuarioService.obtenerTodos().subscribe(
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
