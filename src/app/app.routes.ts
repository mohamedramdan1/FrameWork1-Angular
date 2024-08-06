import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContnatctComponent } from './contnatct/contnatct.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', title: 'home' },
  { path: '', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portfolio', component: PortfoliosComponent, title: 'portfolio' },
  { path: 'contact', component: ContnatctComponent, title: 'contact' },
];
