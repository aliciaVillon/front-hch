import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisPacientesComponent } from './his-pacientes.component';

describe('HisPacientesComponent', () => {
  let component: HisPacientesComponent;
  let fixture: ComponentFixture<HisPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
