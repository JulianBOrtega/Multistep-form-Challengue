import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../forms/models/userInfo';
import { USUARIOS } from '../formulario/models/userInfo';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {
  
  constructor() { }

  obtenerTodos():Observable<UserInfo[]>
  {
    return of(USUARIOS)
  }
}
