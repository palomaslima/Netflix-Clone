import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalheComponent } from './pagina-detalhe.component';

describe('PaginaDetalheComponent', () => {
  let component: PaginaDetalheComponent;
  let fixture: ComponentFixture<PaginaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
