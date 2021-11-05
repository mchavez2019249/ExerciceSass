import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosExampleComponent } from './modulos-example.component';

describe('ModulosExampleComponent', () => {
  let component: ModulosExampleComponent;
  let fixture: ComponentFixture<ModulosExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
