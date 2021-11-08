import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUnoComponent } from './lib-uno.component';

describe('LibUnoComponent', () => {
  let component: LibUnoComponent;
  let fixture: ComponentFixture<LibUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
