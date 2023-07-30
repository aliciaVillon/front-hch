import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisPacientesModalComponent } from './his-pacientes-modal.component';

describe('HisPacientesModalComponent', () => {
  let component: HisPacientesModalComponent;
  let fixture: ComponentFixture<HisPacientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisPacientesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisPacientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
