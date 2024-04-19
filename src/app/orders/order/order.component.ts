import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import{FormsModule,NgForm} from '@angular/forms'
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import{CustomerService} from 'src/app/shared/customer.service';
import{Customer} from 'src/app/shared/Customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',

  styles: [
    
  ]
})
export class OrderComponent implements OnInit {
custList:Customer[];
isValid:boolean=true;
optionalOrderID;

  constructor(public service:OrderService,
              public dialog:MatDialog,
              public custService:CustomerService,
              private toastr:ToastrService,
              private router:Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    let orderId= this.activatedRoute.snapshot.params['id'];

   
    this.optionalOrderID=orderId;
   // console.log(orderId);
   if(orderId==null)
   {
    this.resetForm();
   }
   else
   {
     this.service.getEditById(parseInt(orderId)).then(res=>{
       this.service.formData=res.order,
       console.log(res)
       this.service.orderItems=res.orderDetails,
       console.log(res);
       
     })
   }
    
    this.custService.getAll().then(res=>{
      this.custList=res as Customer[];
    })
  }
  // resetForm(form?:ngForm){
    resetForm(){
    // if (form ==null)
    this.service.formData={
      
      OrderID:0,
      OrderNo:Math.floor( (100000 + Math.random()*900000) ).toString(),
      CusID:'',
      Paymethod:'',
  TotalPrice:0,
  DeletedOrderItemIDs:"",
  Customer : new Customer()
    };
    this.service.orderItems=[];
  }
  addoreditItem(OrderIndex,OrderID){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=true;
    dialogconfig.disableClose=true;
    dialogconfig.width="50%";
    dialogconfig.data={
      OrderIndex,OrderID
    }
    console.log(OrderIndex)
    this.dialog.open(OrderItemsComponent,dialogconfig).afterClosed().subscribe(res=>{
      this.updateGTotal();
    })
  }
  deleteItem(OrderID,i)
  {
//console.log(i)
if(OrderID !=null)
console.log(OrderID)
console.log(  this.service.formData.DeletedOrderItemIDs)
if(this.service.formData.DeletedOrderItemIDs == undefined)
{
  this.service.formData.DeletedOrderItemIDs ="";
}
    this.service.formData.DeletedOrderItemIDs += OrderID +",";
    this.service.orderItems.splice(i,1);
    this.updateGTotal();
  }
  updateGTotal(){

    this.service.formData.TotalPrice=this.service.orderItems.reduce((pre,curr)=>{
      return (pre+curr.Total);
    },0);
    this.service.formData.TotalPrice =parseFloat(this.service.formData.TotalPrice.toFixed(2));
  }
  validateForm(){
    if(this.service.formData.CusID=='' )
    {
      this.isValid=false;
    }
    else if(this.service.formData.Paymethod=='')
    { this.isValid=false;

    }
    else
    {
      this.isValid= true;
    }
    return this.isValid;
  }
  onsubmit(form:NgForm){
    if(this.validateForm()){
   console.log("Order saving.");
     console.log(form.value)
     this.service.saveOrUpdate().subscribe({
      next: data => {console.log(data)
      this.toastr.success("Saved successfully","TSRestaurant");
      this.router.navigate(['/orders']);
      },
      
      error: error => console.error('There was an error!', error)
  });
    }
  }
  //For Optional routing
  goToList(){
    let selectedId=  this.optionalOrderID ?this.optionalOrderID :null;
    this.router.navigate(["/orders",{id:selectedId}]);
  }


}

