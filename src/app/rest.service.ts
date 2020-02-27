import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pedido} from './pedido';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiURL= 'http://localhost:8084';


  constructor(private httpClient: HttpClient) { }


  public pruebaget(){
  //return this.httpClient.get(this.apiURL+'/tweets');
  }

  public postPedido(pedido:Pedido){
    return this.httpClient.post(this.apiURL+'/iniciopedido',pedido);
  }

}
