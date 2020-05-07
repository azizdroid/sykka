import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() {
    console.log("tags constructor is called");
   }

  ngOnInit(): void {
    console.log("tags NGON IT is called");
  }
  ngOnDestroy(): void {
    console.log("tags NGON destroy is called");
  }

}
