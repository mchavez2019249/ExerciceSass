import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

export class PersonaModel{
  constructor(
    public nombre: string,
    public fecha: string,
    public correo: string
  ){}
}



@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  durationInSeconds = 5;


  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword(){
    if (this.password.hasError('required')){
      return 'password required';
    }
    return this.password.hasError('password') ? 'Not a valid passwprd' : '';
  }

  ngOnInit(): void {
  }


}
