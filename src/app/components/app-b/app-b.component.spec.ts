import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBComponent } from './app-b.component';

describe('AppBComponent', () => {
  let component: AppBComponent;
  let fixture: ComponentFixture<AppBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
