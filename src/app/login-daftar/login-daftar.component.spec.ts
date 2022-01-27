import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDaftarComponent } from './login-daftar.component';

describe('LoginDaftarComponent', () => {
  let component: LoginDaftarComponent;
  let fixture: ComponentFixture<LoginDaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
