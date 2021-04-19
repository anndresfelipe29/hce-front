import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesSocialesComponent } from './antecedentes-sociales.component';

describe('AntecedentesSocialesComponent', () => {
  let component: AntecedentesSocialesComponent;
  let fixture: ComponentFixture<AntecedentesSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentesSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
