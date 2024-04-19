import { Component } from '@angular/core';

import { ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TSRestaurant ';
  status="";
  isConnected=false;
  
  constructor(private connectionService:ConnectionService){
    // this.connectionService.monitor().subscribe(s=>{
    //   console.log(s)
    //   this.isConnected=s;
    //   if(this.isConnected)
    //     this.status="Online";
    //   else
    //     this.status ="Offline";
    // })
 
    this.connectionService.monitor().subscribe(isConnected => {
      alert("DD")
      console.log(isConnected)
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    })
  }
}
