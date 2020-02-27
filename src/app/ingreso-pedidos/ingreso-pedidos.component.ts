import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-ingreso-pedidos',
  templateUrl: './ingreso-pedidos.component.html',
  styleUrls: ['./ingreso-pedidos.component.css']
})
export class IngresoPedidosComponent implements OnInit {

  constructor(private api1:RestService) { }

  IDCliente:string;
  pedido:string;
  Nuevopedido;


  ngOnInit() {
  }

  public realizarPedido(){
    this.Nuevopedido ={
      "IDCliente":this.IDCliente,
      "pedido":this.pedido
    }
    this.api1.postPedido(this.Nuevopedido).subscribe((response)=>{
      console.log("PEDIDO SOLICITADO POR EL CLIENTE");
    })
    console.log(this.pedido);
  }

}
