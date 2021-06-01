import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPacienteComponent } from './creacion-paciente.component';

describe('CreacionPacienteComponent', () => {
  let component: CreacionPacienteComponent;
  let fixture: ComponentFixture<CreacionPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
