import { Component } from '@angular/core';

@Component({
  selector: 'app-contnatct',
  standalone: true,
  imports: [],
  templateUrl: './contnatct.component.html',
  styleUrl: './contnatct.component.css',
})
export class ContnatctComponent {
  inputValue1: string = '';
  inputValue2: string = '';
  inputValue3: string = '';
  inputValue4: string = '';

  onInput(event: Event) {
    let target = event.target as HTMLInputElement
    this.inputValue1 = target.value;
  }
  onInput1(event: Event) {
    let target = event.target as HTMLInputElement;
    this.inputValue2 = target.value;
  }
  onInput2(event: Event) {
    let target = event.target as HTMLInputElement;
    this.inputValue3 = target.value;
  }
  onInput3(event: Event) {
    let target = event.target as HTMLInputElement;
    this.inputValue4 = target.value;
  }
}
