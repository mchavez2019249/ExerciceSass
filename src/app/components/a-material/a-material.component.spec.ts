import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMaterialComponent } from './a-material.component';

describe('AMaterialComponent', () => {
  let component: AMaterialComponent;
  let fixture: ComponentFixture<AMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
