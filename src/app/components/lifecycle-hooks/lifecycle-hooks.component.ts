import {ChangeDetectorRef, Component, OnInit,DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit , DoCheck, OnDestroy{
  marcaSelect: string = 'Honda'
  marcas: string[] = ['Volvo', 'Honda', 'Toyota', 'Ford', 'Mercedes']
  user: string[] = ['Marlon', 'Raúl', 'Gilda', 'Eliezer', 'Noelia']
  text: string = 'hola mundo';
  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach();
  }

  ngDoCheck(): void { // Detecta el cambio en el componente
    this.changeDetector.detectChanges();
    console.log('ngDoCheck detecto cambio');
  }

  cambiartext(){
    this.text = 'ngDoCheck hola mundo'
  }


  ngOnInit(): void { //Inicializa el contenido del Componente, solo una vez
    this.getUser();
  }

  ngOnDestroy():void{ //Se ejecuta cuando el componente es cerrado o se cambia de vista
    console.log('se cerro el componente life cycles')
  }

  getUser() {
    this.user;
  }


}
