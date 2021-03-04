import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetrPasswordComponent } from './resetr-password.component';

describe('ResetrPasswordComponent', () => {
  let component: ResetrPasswordComponent;
  let fixture: ComponentFixture<ResetrPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetrPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
