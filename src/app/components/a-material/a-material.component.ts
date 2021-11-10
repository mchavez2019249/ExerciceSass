import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomSheetOverviewExampleSheetComponent} from "../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatDialog} from '@angular/material/dialog';
import {FormDialogComponent} from "../form-dialog/form-dialog.component";

@Component({
  selector: 'app-a-material',
  templateUrl: './a-material.component.html',
  styleUrls: ['./a-material.component.scss']
})


export class AMaterialComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = ['One', 'Two', 'Three'];
  hidden = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  selectable = true;
  removable = true;
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);
  step = 0;
  myColor: string = "red";
  radius: number = 40;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  name: string;
  age: number;
  gender: string;
  folders = [
    {name: 'Photos', updated: new Date('1/1/16'),},
    {name: 'Recipes', updated: new Date('1/17/16'),},
    {name: 'Work', updated: new Date('1/28/16'),},];
  notes = [
    {name: 'Vacation Itinerary', updated: new Date('2/20/16'),},
    {name: 'Kitchen Remodel', updated: new Date('1/18/16'),},
  ];

  personas = [
    {name: 'Jose', age: 4, gender:'M'},
    {name: 'Manuel', age: 5, gender:'M'},
    {name: 'Ramiro', age: 2, gender:'M'},
    {name: 'Sunscreen', age: 4, gender:'F'},
    {name: 'Cooler', age: 25, gender:'F'},
    {name: 'Swim suit', age: 15, gender:'F'},
  ];



  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: 'auto',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
