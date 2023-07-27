import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisEnviarTramaComponent } from './his-enviar-trama.component';

describe('HisEnviarTramaComponent', () => {
  let component: HisEnviarTramaComponent;
  let fixture: ComponentFixture<HisEnviarTramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisEnviarTramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisEnviarTramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
