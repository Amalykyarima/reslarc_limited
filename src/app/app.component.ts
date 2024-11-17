import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/common/header/header.component";
import { FooterComponent } from './components/common/footer/footer.component';
import { ReslarcCareersComponent } from './components/common/reslarc-careers/reslarc-careers.component';
import { ReslarcIntelligenceComponent } from './components/common/reslarc-intelligence/reslarc-intelligence.component';
import { ReslarcNewsComponent } from './components/common/reslarc-news/reslarc-news.component';
import { ReslarcSpaceSystemsComponent } from './components/common/reslarc-space-systems/reslarc-space-systems.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ReslarcCareersComponent,
    ReslarcIntelligenceComponent, ReslarcNewsComponent,ReslarcSpaceSystemsComponent, AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reslarc_limited';
}
