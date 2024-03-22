import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  /* Primer  menú lateral*/
  isMenuOpen = false;
  /* Submenú lateral para information*/
  isSubMenuOpen = false;
  /* Dropdown */
  isDropdownOpen = false;

  /* 
    * Activa el menú lateral inicial
    * cambia el estado del sub menú en el caso de que este visible
  */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isSubMenuOpen = false;
  }
  /* 
    * Activa el sub menú lateral 
  */
  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  /* 
  * Activa el dopdown en desktop
*/
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen)
  }

  ngOnInit(): void {
  }

}
