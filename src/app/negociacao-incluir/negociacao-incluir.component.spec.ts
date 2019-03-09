import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacaoIncluirComponent } from './negociacao-incluir.component';

describe('NegociacoDetalheComponent', () => {
  let component: NegociacaoIncluirComponent;
  let fixture: ComponentFixture<NegociacaoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociacaoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacaoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
