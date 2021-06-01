import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRegistroHistoriaClinicaComponent } from './agregar-registro-historia-clinica.component';

describe('AgregarRegistroHistoriaClinicaComponent', () => {
  let component: AgregarRegistroHistoriaClinicaComponent;
  let fixture: ComponentFixture<AgregarRegistroHistoriaClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRegistroHistoriaClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRegistroHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
