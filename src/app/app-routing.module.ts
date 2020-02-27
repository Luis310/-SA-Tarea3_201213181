import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngresoPedidosComponent} from './ingreso-pedidos/ingreso-pedidos.component';

const routes: Routes = [
  {path:'pedidos',component:IngresoPedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
