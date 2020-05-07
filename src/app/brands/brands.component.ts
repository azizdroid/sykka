import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor() { 
    console.log("brand constructor is called");
  }

  ngOnInit(): void {
    console.log("brand ngOnInit is called");
  }
  ngOnDestroy(): void {
    console.log("brand ngOnDestroy is called");
  }

}
