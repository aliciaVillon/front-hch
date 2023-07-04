import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiexComponent } from './ciex.component';

describe('CiexComponent', () => {
  let component: CiexComponent;
  let fixture: ComponentFixture<CiexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
