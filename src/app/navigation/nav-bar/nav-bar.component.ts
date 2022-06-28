import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/Menus';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
menuLogin: string = "Sign In";
home: string = "Home";
services: string;
reports: string = "Reports";
servicesDropdown: string[] = ["Home", "Services"];
menues: Menu[] = [];

  constructor() { 
    this.services = "Services";
  }

  getMenus(){
    return this.menues;
  }

}
