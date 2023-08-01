import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from '../models/userInfo';

@Component({
  selector: 'formulario-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {

  @Input()
  usuarios:IUsuario[] = [];

  @Input()
  cargando:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
