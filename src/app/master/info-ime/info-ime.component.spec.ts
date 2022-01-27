import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIMEComponent } from './info-ime.component';

describe('InfoIMEComponent', () => {
  let component: InfoIMEComponent;
  let fixture: ComponentFixture<InfoIMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
