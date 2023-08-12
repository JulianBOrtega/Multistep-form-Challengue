import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IUsuario } from '../models/userInfo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'formulario-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit, OnChanges {

  @Input()
  usuarios:IUsuario[] = [];

  @Input()
  cargando:boolean = false;

  columnas: string[] = ['name', 'email', 'telefono', 'localidad'];
  dataSource: MatTableDataSource<IUsuario> = new MatTableDataSource<IUsuario>([]);
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.usuarios?.currentValue){
      this.dataSource.data = this.usuarios;
    }
  }

  ngOnInit(): void 
  {
    
  }

}
