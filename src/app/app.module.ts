import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './Orders/order/order.component';
import { OrderItemsComponent } from './Orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import{FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MypipePipe } from './mypipe.pipe';
import { SalarypipePipe } from './salarypipe.pipe';
import { AddTaxPipe } from './add-tax.pipe';
import { SalaryFilterPipe } from './salary-filter.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import{AgmCoreModule} from '@agm/core';

import {ConnectionServiceModule} from 'ng-connection-service';
import { MyMapComponent } from './my-map.component';
import { ViewOrderComponent } from './orders/order/view-order.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    CustomPipeComponent,
    MypipePipe,
    SalarypipePipe,
    AddTaxPipe,
    SalaryFilterPipe,
    PageNotFoundComponent,
    MyMapComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
    ConnectionServiceModule,
    AgmCoreModule.forRoot(
      {
        apiKey:"AIzaSyC5EA0j7DyJ6o8lI5MKrJ4ufkSOCpV8ll4",
        libraries: ['places']
      }
    ),
  ],
  providers: [OrderService
  ],
  /**for popup */
  entryComponents:[OrderItemsComponent],
  /** */
  bootstrap: [AppComponent]
})
export class AppModule { }
