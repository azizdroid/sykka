import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makeup';
  hover = false;
  hover1= false;

hover2= false;hover3= false;hover4= false;

constructor(){
  var hover= true;
}
  public newclass: any = {
  color:"pink",
  }
navclass: any;
  ngOnInit(){
   
  }
}
