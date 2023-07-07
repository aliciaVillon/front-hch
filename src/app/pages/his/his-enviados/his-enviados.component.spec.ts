import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisEnviadosComponent } from './his-enviados.component';

describe('HisEnviadosComponent', () => {
  let component: HisEnviadosComponent;
  let fixture: ComponentFixture<HisEnviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisEnviadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HisEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
