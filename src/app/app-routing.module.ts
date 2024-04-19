import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './Orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { Order } from './shared/order.model';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MyMapComponent } from './my-map.component';
import { ViewOrderComponent } from './orders/order/view-order.component';
const routes: Routes = [
  {path:"",redirectTo:'orders',pathMatch:'full'},
  {path:"orders",component:OrdersComponent},
  {path:"order",children:[
    {path:'',component:OrderComponent},
    {path:'edit/:id',component:OrderComponent},
    {path:"view/:id",component:ViewOrderComponent},
  ]},
  
  {path:"c",component:CustomPipeComponent},
  {path:"map",component:MyMapComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
