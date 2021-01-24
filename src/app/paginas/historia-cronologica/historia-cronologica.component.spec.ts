import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaCronologicaComponent } from './historia-cronologica.component';

describe('HistoriaCronologicaComponent', () => {
  let component: HistoriaCronologicaComponent;
  let fixture: ComponentFixture<HistoriaCronologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaCronologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaCronologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
