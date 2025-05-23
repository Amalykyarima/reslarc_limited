import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openSideMenu: boolean = false;
  openedMenu: string = "";
  scrollPosition: any = 0;
  // dropdownVisible = false;


  @ViewChild('menuList', { static: true }) menuList!: ElementRef;
  dropdownVisible: boolean = false; // Controls the visibility of the dropdown
  dropdownItems: { label: string; link: string }[] = []; // Holds the dropdown content dynamically

  // Define the structure for dropdownData
  dropdownData: Record<
    'intelligence' | 'services' | 'space' | 'news' | 'careers' | 'sales',
    { label: string; link: string }[]
  > = {
    intelligence: [
      { label: 'About Us', link: '/about' },
      { label: 'Our Vision', link: '/vision' },
      { label: 'Our Team', link: '/team' },
      { label: 'Case Studies', link: '/case_study' },
      { label: 'Register', link: '/register' },
      { label: 'Login', link: '/login' },

    ],
    services: [
      { label: 'Our Business', link: '/services/business' },
      { label: 'Our Constellation', link: '/services/constellation' },
      { label: 'Products and Services', link: '/services/products' },
      { label: 'Who We Serve', link: '/services/clients' },
      { label: 'Explore', link: '/services/explore' },
      { label: 'Login', link: '/services/login' },
    ],
    space: [
      { label: 'Spacecraft', link: '/space_craft' },
      { label: 'Satellite Imaging', link: '/satellite_imagining' },
      { label: 'R&D', link: '/r_d' },
    ],
    news: [
      { label: 'Press Releases', link: '/press_release' },
      { label: 'Blog', link: '/blog' },
      { label: 'Events', link: '/events' },
    ],
    careers: [
      { label: 'Open Positions', link: '/open_positions' },
      { label: 'Life at Reslarc', link: '/life_at_reslarc' },
      { label: 'Internships', link: '/internships' },
    ],
    sales: [
      { label: 'Contact Us', link: '/sales_enquiry' },
      // { label: 'Request a Quote', link: '/sales/quote' },
      // { label: 'FAQs', link: '/sales/faqs' },
    ],
  };

  constructor(private router: Router,
    ) { }

  ngOnInit(): void {

  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }


testClick() {
  console.log('Register link clicked');
  this.router.navigateByUrl('/register');

}

navigateTo(event: any){
  console.log('Register link clicked', event);

}

routeToDashboard(){
  console.log('Register link clicked');
  this.router.navigateByUrl('/home')
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

  // Function to show the dropdown for the selected menu
  showDropdown(menuKey: keyof typeof this.dropdownData) {
    this.dropdownItems = this.dropdownData[menuKey]; // Load the menu items dynamically
    this.dropdownVisible = !this.dropdownVisible; // Show the dropdown
  }

  // Function to hide the dropdown
  hideDropdown() {
    this.dropdownVisible = false;
    this.dropdownItems = [];
  }

}
