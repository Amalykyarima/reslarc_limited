import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openSideMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {

}

toggleSideMenu() {
  this.openSideMenu = !this.openSideMenu;
}
}
