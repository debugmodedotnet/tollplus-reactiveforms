import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
