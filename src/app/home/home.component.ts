import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Idata } from './dta';
 import { MakeupService } from '../makeup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit , OnDestroy{

  public mydata: any;
  apiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json";
apiData=[];
private dta: Idata[] = [];
  
 
constructor(public makeupService:MakeupService){
  console.log("home constructor is being called")
}
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
ngOnInit(): void {
    console.log("home ng Onit is called");
    this.mydata= this.makeupService.getmydata();
     
            console.log(this.mydata);
          }
  }
  


