import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPedidosComponent } from './ingreso-pedidos.component';

describe('IngresoPedidosComponent', () => {
  let component: IngresoPedidosComponent;
  let fixture: ComponentFixture<IngresoPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
