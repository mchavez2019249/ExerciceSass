import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-hijo',
  templateUrl: './lifecycle-hooks-hijo.component.html',
  styleUrls: ['./lifecycle-hooks-hijo.component.scss']
})
export class LifecycleHooksHijoComponent implements OnInit, OnChanges {
  @Input() marca: string;

  datos = [
    {marca: 'Honda', value: 10},
    {marca: 'Honda', value: 20},
    {marca: 'Volvo', value: 5},
    {marca: 'Volvo', value: 10},
    {marca: 'Toyota', value: 2},
    {marca: 'Toyota', value: 10},
    {marca: 'Ford', value: 30},
    {marca: 'Ford', value: 10},
    {marca: 'Mercedes', value: 40},
    {marca: 'Mercedes', value: 10},
  ]


  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) { //Ejecuta cambios en inputs
    if (changes.marca.currentValue != changes.marca.previousValue) {
      const nuevaMarca = changes.marca.currentValue
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca)
      this.total = 0
      datos.forEach(dato => this.total += dato.value)
    }
  }

}
