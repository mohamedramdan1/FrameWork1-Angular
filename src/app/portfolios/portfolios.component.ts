import { Component, ElementRef, ViewChild } from '@angular/core';
interface IPhoto {
  img: string;
}
@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [],
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.css',
})
export class PortfoliosComponent {
  photos: IPhoto[] = [
    { img: './assets/images/poert1.png' },
    { img: './assets/images/port2.png' },
    { img: './assets/images/port3.png' },
    { img: './assets/images/poert1.png' },
    { img: './assets/images/port2.png' },
    { img: './assets/images/port3.png' },
  ];

  @ViewChild('lightcontainer') lightcontainer!: ElementRef;
  @ViewChild('light_item') light_item!: ElementRef;

  showimage(event: any): void {
    this.lightcontainer.nativeElement.classList.remove('d-none');
    let current_src = event;
    this.light_item.nativeElement.style.backgroundImage = `url(${current_src})`;
  }

  hide(e: any): void {
    if (e.target == this.lightcontainer.nativeElement) {
      this.lightcontainer.nativeElement.classList.add('d-none');
    }
  }
}
