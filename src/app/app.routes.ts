import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SalesEnquiryComponent } from './pages/sales-enquiry/sales-enquiry.component';
import { AboutComponent } from './pages/about/about.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { VisionComponent } from './pages/vision/vision.component';
import { TeamComponent } from './pages/team/team.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { SpaceCraftComponent } from './pages/space-craft/space-craft.component';
import { RDComponent } from './pages/r-d/r-d.component';
import { SatelliteImagingComponent } from './pages/satellite-imaging/satellite-imaging.component';
import { PressReleaseComponent } from './pages/press-release/press-release.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent }, // Default route
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sales_enquiry', component: SalesEnquiryComponent },
  { path: 'login', component: LogInComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'case_study', component: CaseStudyComponent },
  { path: 'r_d', component: RDComponent },
  { path: 'satellite_imagining', component: SatelliteImagingComponent },
  { path: 'space_craft', component: SpaceCraftComponent },
  { path: 'press_release', component: PressReleaseComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'events', component: EventsComponent },
  { path: 'open_positions', component: SpaceCraftComponent },
  { path: 'lif_at_reslarc', component: SpaceCraftComponent },
  { path: 'internships', component: SpaceCraftComponent },













];


