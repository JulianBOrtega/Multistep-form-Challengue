import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsuario } from '../formulario/models/userInfo';
import { USUARIOS } from '../formulario/models/userInfo';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {
  
  constructor() { }

  obtenerTodos():Observable<IUsuario[]>
  {
    return of(USUARIOS)
  }
}
