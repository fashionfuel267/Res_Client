import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';


import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
formData:Order;
orderItems:OrderItem[];
  constructor(private http:HttpClient) { }

saveOrUpdate(){
var  body ={
  ... this.formData,
  OrderItems:this.orderItems
}
console.log(this.formData,)
console.log("Order submitted")

// return this.http.post("http://localhost:44370/api/Orders",{
  return this.http.post( environment.apiURL+"/Orders/Orderposted",{
  ... this.formData,
  OrderItems:this.orderItems
})

}
getAll(){
  console.log(environment.apiURL+ "/Orders")
  return this.http.get(environment.apiURL+ "/Orders/AllOrder")
                  .toPromise()
                  
}
getAllwithError():Observable<Order[]>{
  return this.http.get<Order[]>(environment.apiURL+ "/Orders/AllOrder")
                  
                  .catch(this.errorHandling);
}
errorHandling(error:HttpErrorResponse){
  console.log(error.message)
  return Observable.throw(error.message || "");
  
}
getEditById(id:number):any{
  return this.http.get(environment.apiURL+ "/Orders/orderbyID/"+id).toPromise();
}
deleteOrder(id:number):any{
  return this.http.delete(environment.apiURL+ "/Orders/"+id).toPromise();
}
}
