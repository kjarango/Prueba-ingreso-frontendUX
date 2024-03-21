import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isMenuOpen = false;
  isSubMenuOpen = false;
  isDropdownOpen = false;
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isSubMenuOpen = false;
  }
  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  Dropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen)
  }

  ngOnInit(): void {
  }

}
