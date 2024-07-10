import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '0'
      })),
      state('closed', style({
        left: '-350px'
      })),
      transition('open => closed', animate('0.3s ease-in-out')),
      transition('closed => open', animate('0.3s ease-in-out'))
    ]),
    trigger('rotateIcon', [
      state('default', style({
        transform: 'rotate(0deg)'
      })),
      state('rotated', style({
        transform: 'rotate(180deg)'
      })),
      transition('default => rotated', animate('0.3s ease-in-out')),
      transition('rotated => default', animate('0.3s ease-in-out'))
    ])
  ]
})
export class NavComponent {
  isOpen = false; // Set to false to close the nav by default

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
