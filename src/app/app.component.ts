import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Fotter1Component } from './fotter-1/fotter-1.component';
import { Fotter2Component } from './fotter-2/fotter-2.component';
import { AboutComponent } from './about/about.component';
import { ContnatctComponent } from './contnatct/contnatct.component';
import { PortfoliosComponent } from "./portfolios/portfolios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    Fotter1Component,
    Fotter2Component,
    AboutComponent,
    ContnatctComponent,
    PortfoliosComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App1';
}
