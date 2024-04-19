import { OrderItem } from './order-item.model';
import { Customer } from './customer.model';

export class Order {
    
     OrderID:number
    CusID :string;
    Paymethod :string;
    TotalPrice:number;
     OrderNo:string;
     DeletedOrderItemIDs:string;
     Customer :Customer ;
    
//      OrderItems :OrderItem[];

}
