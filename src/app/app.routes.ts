import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SalesEnquiryComponent } from './pages/sales-enquiry/sales-enquiry.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sales_enquiry', component: SalesEnquiryComponent },

];


