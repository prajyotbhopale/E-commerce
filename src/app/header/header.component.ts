import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isadmin= false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("usertype") == "admin")
    this.isadmin = true;
  }

  logout(){
    localStorage.clear();
    window.location.replace("../");
  }


}
