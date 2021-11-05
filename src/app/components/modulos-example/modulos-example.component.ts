import { Component, OnInit } from '@angular/core';
import {FormDialogComponent} from "../form-dialog/form-dialog.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modulos-example',
  templateUrl: './modulos-example.component.html',
  styleUrls: ['./modulos-example.component.scss']
})
export class ModulosExampleComponent implements OnInit {
  nombre: string;
  fecha: string;
  correo: string;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '250px',
      data: {nombre: this.nombre, fecha: this.fecha, correo: this.correo},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nombre = result;
    });
  }

  ngOnInit(): void {
  }



}
