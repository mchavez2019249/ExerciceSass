import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  Renderer2,
  AfterContentChecked,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-app-b',
  templateUrl: './app-b.component.html',
  styleUrls: ['./app-b.component.scss']
})
export class AppBComponent implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef;
  @ContentChild(AppComponent, { read: ElementRef }) cRef: ElementRef;
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{  // Ejecuta al cargar las view y ViewChild
    this.renderer.setStyle(this.hRef.nativeElement, 'font-size', '25px')
    this.renderer.setStyle(this.hRef.nativeElement, 'width', '30%')
  }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterContentChecked() { //Ejecuta al confirmar la carga del view y el ViewChild
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB());
  }

  ngAfterViewInit(): void {  // Ejecuta al cargar las view y ViewChild
    this.renderer.setStyle(this.pStmt.nativeElement, 'width', '30%');
    console.log()
  }

  ngAfterViewChecked():void {  //Ejecuta al confirmar la carga del view y el ViewChild
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB());
  }

}
