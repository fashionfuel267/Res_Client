import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
   elist;
  constructor() { }
  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;
  taxRate;
  itemCount;
  ngOnInit(): void {
     this.elist=[
      {name:"fahima",gender:"female",salary:450000},
      {name:"Asma",gender:"female",salary:550000},
      {name:"Mithu",gender:"male",salary:400000},
      {name:"Sabana",gender:"female",salary:40000},
      {name:"Amina",gender:"female",salary:1450000},
      {name:"momin",gender:"male",salary:500000}

    ]
   
  }

}
