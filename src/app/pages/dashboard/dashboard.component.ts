import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RegisterComponent } from "../register/register.component";
import { RequestsComponent } from "../requests/requests.component";
import { PaymentsComponent } from "../payments/payments.component";
import { LogoutComponent } from "../logout/logout.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RequestsComponent, PaymentsComponent, LogoutComponent,CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showRequest: boolean = false;
  showPayments: boolean = false;
  showLogout: boolean = false;

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,

    ) { }

  logOut(){
    // Implement logout logic here
    console.log('Logged out');
  }

  routeToRequest() {
    console.log('Register link clicked');
    // this.router.navigateByUrl('/request');
    this.showRequest = true;
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
    this.router.navigateByUrl('/payment');

  }

  routeToHome(){
    console.log('Register link clicked');
    this.router.navigateByUrl('/home')
  }
}
