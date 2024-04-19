import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styles: []
})
export class ViewOrderComponent implements OnInit {
public orderID;
public orderList;
public OrderDetails;
public msg="";
  constructor(private router:Router ,private activatedRoute:ActivatedRoute,public service:OrderService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (params:ParamMap)=>{
      this.orderID=parseInt(params.get("id"));
      if(this.orderID>0 || this.orderID ===null)
      {
        this.msg="";
      this.service.getEditById(parseInt(this.orderID)).then(res=>{
        this.orderList=res.order;
        this.OrderDetails=res.orderDetails;
        console.log(res);
        
      })
    }
    else
    {
      this.msg="Invalid Order ";
    }
    })
  }
  GoPrevious()
  {
    let pId= this.orderID -1;
    this.router.navigate(["/order/view/"+pId]);
  }
  GoNext(){
    let pId= this.orderID + 1;
    this.router.navigate(["/order/view/"+pId]);
  }

}
