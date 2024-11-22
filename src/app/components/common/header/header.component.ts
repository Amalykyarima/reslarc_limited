import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openSideMenu: boolean = false;
  openedMenu: string = "";
  scrollPosition: any = 0;
  @ViewChild('menuList', { static: true }) menuList!: ElementRef;


  constructor(private router: Router,
    ) { }

  ngOnInit(): void {

}

testClick() {
  console.log('Register link clicked');
  this.router.navigateByUrl('/register');

}

routeToDashboard(){
  console.log('Register link clicked');
  this.router.navigateByUrl('/dashboard')
}

routeToHome(){
  console.log('Register link clicked');
  this.router.navigateByUrl('/home')
}


toggleNavBar(): void {
  const navBar = document.querySelector('.nav-bar');
  navBar?.classList.toggle('active');
}

openSubMenu(type: string) {
  if (this.openedMenu === type) {
      this.openedMenu = "";
  }
  else {
      this.openedMenu = type;
  }
}

toggleSideMenu() {
  this.openSideMenu = !this.openSideMenu;
}

toggleMenu(): void {
  this.toggleSideMenu()
  console.log('ddc')
  const currentHeight = this.menuList.nativeElement.style.maxHeight;
  console.log('currentHeight', currentHeight)

  this.menuList.nativeElement.style.maxHeight = currentHeight === '0px' ? '300px' : '0px';
  console.log('maxHeight', this.menuList.nativeElement.style.maxHeight)

}

}
