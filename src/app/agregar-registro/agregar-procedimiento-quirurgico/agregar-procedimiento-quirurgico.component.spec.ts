import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProcedimientoQuirurgicoComponent } from './agregar-procedimiento-quirurgico.component';

describe('AgregarProcedimientoQuirurgicoComponent', () => {
  let component: AgregarProcedimientoQuirurgicoComponent;
  let fixture: ComponentFixture<AgregarProcedimientoQuirurgicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProcedimientoQuirurgicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProcedimientoQuirurgicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
