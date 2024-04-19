import { Component, OnInit } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { OrderService } from 'src/app/shared/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router ,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orderList;
public selectedId;
public orderListwitherror;
public errormessage;
  constructor(private orderService:OrderService,
   private   toastr:ToastrService,
   private router:Router,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get("id"));
      this.selectedId=id;
    })
   this.loadOrder();
   
  }

  loadOrder(){
    // this.orderService.getAll().then(r=>{
    //   this.orderList=r;
    //   console.log(r)
    // })
    this.orderService.getAllwithError().subscribe(d=>{
      console.log(d)
      this.orderListwitherror=d
      this.orderList=d
    },
    error=>this.errormessage=error
    )
  }
  deleteOrder(id:number){
      this.orderService.deleteOrder(id).then(res=>{
        if(confirm("Are you sure ,you want to delete data")){
          this.toastr.warning("Successfuly  deleted ","TSRestaurant")
        }
        this.loadOrder();
      })
  }
  // For optional parameter
  isSelected(order){
    return order.OrderID === this.selectedId;
  }
}
