import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";

import{OrderItem} from 'src/app/shared/order-item.model';
import{Item} from 'src/app/shared/item.model';
import{NgForm} from '@angular/forms';
import{ItemService} from 'src/app/shared/item.service';
import{OrderService} from 'src/app/shared/order.service';
import { format } from 'util';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
  isValid:boolean=true;
  formData:OrderItem;
itemList:Item[];



  constructor(
     @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<OrderItemsComponent>,
   public itemsservice:ItemService,
   public orderService:OrderService
  ) { }

  ngOnInit(): void {
    this.itemsservice.getAll( ).then(res=>
      {
        this.itemList=res as Item[]
        console.log(res)
        console.log("Order here ")
      }
      );
      console.log(this.data)
      if(this.data.OrderIndex==null )
      {
            this.formData={
              OrderId:this.data.OrderId,
              // ItemID:0,
              ItemName:'',
              Qty:0,
              Price:0,
              Total:0,
              ID:0,
              PrdID:0,
          }
    }
  else
  {
    console.log(this.orderService.orderItems[this.data.OrderIndex]);
    
   /* this will directly assign & effect in original records thats why we have to assign a copy of record
   this.formData=this.orderService.orderItems[this.data.OrderIndex];*/
   //copy
   this.formData=Object.assign({}, this.orderService.orderItems[this.data.OrderIndex]);
  }
  }
updatePrice(ctrl){
  
  if(ctrl.selectedIndex===0)
  {
    this.formData.Price=0;
    this.formData.ItemName=''
  }
  else
  {
    this.formData.Price=this.itemList[ctrl.selectedIndex-1].Price;
    this.formData.ItemName=this.itemList[ctrl.selectedIndex-1].Name;
  }
  this.updateTotal();
}
updateTotal()
{
  console.log(this.formData.Qty)
  this.formData.Total=parseFloat(  (this.formData.Price * this.formData.Qty).toFixed(2));
}
onSubmit(form:NgForm){
  console.log(this.validateForm(form.value))
  console.log(form.value)
  if(this.validateForm(form.value))
  {
    if(this.data.OrderIndex==null )
      {
       this.orderService.orderItems.push(form.value);
      }
      else
      {
        this.orderService.orderItems[this.data.OrderIndex]=form.value;
      }
  this.dialogRef.close();
  }

}
validateForm(formData:OrderItem)
{
  if(this.formData.PrdID==0 )
        this.isValid=false;
      else if( this.formData.Qty==0)
        this.isValid=false;
        else
        this.isValid=true;
      return this.isValid;
}
}

