import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RegisterComponent } from "../register/register.component";
import { RequestsComponent } from "../requests/requests.component";
import { PaymentsComponent } from "../payments/payments.component";
import { LogoutComponent } from "../logout/logout.component";
import { CommonModule } from '@angular/common';
import { AllRequestsComponent } from "../all-requests/all-requests.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RequestsComponent, PaymentsComponent, LogoutComponent, CommonModule, AllRequestsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showRequest: boolean = false;
  showPayments: boolean = false;
  showLogout: boolean = false;
  showAllRequest: boolean = true;


  constructor(private router: Router,
    private cdr: ChangeDetectorRef,

    ) { }

  logOut(){
    // Implement logout logic here
    console.log('Logged out');
    this.router.navigateByUrl('/login')

  }

  routeToRequest() {
    console.log('Register link clicked');
    this.showRequest = true;
    this.showPayments = false;
    this.showLogout = false;
    this.showAllRequest = false;
    this.cdr.detectChanges(); // Ensure UI updates


  }

  routeToAllRequest() {
    console.log('Register link clicked');
    this.showAllRequest = true;
    this.showRequest = false;
    this.showPayments = false;
    this.showLogout = false;
    this.cdr.detectChanges(); // Ensure UI updates


  }

  routeToDashboard() {
    console.log('Register link clicked');
    this.router.navigateByUrl('/dashboard');

  }

  routeToPayments() {
    console.log('Register link clicked');
    this.showAllRequest = false;
    this.showRequest = false;
    this.showPayments = true;
    this.showLogout = false;
    this.router.navigateByUrl('/payment');

  }

  routeToHome(){
    console.log('Register link clicked');
    this.router.navigateByUrl('/home')
  }
}
