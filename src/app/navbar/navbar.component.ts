import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  padding:string="24px"
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 30) {
      this.padding = '10px';
    } else {
      this.padding = '24px';
    }
  }
}
