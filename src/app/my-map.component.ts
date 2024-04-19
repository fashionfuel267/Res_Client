import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-map',
  template: `
   
<div width="600" height="900" style="border:2px solid red;background:yellow;">

    <agm-map [latitude]="lat" [longitude]="lng"  [zoom]="zoom">
    <agm-marker [latitude]="lat" [longitude]="lng">

    </agm-marker>
    </agm-map>
    </div>
    
  `,
  styles: [
    //must give style in single line
    'h1 { font-weight: normal; }',
    'agm-map{ height:600px;    }'
  ]
})
export class MyMapComponent implements OnInit {
lat:number;
lng:number;
zoom:number;
  constructor() { }

  ngOnInit(): void {
    this.setCurrentLocation();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng      = position.coords.longitude;
        this.zoom = 15;
        console.log(this.lat + ","+ this.lng)
      });
    }
  }
}
