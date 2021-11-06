import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksHijoComponent } from './lifecycle-hooks-hijo.component';

describe('LifecycleHooksHijoComponent', () => {
  let component: LifecycleHooksHijoComponent;
  let fixture: ComponentFixture<LifecycleHooksHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleHooksHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
