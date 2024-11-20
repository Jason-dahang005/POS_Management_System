import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  boxDetails = [
    { colorName: 'color-primary', iconColor: 'light-color-primary', title: 'total number of daily purchase', icon: 'shopping_cart'},
    { colorName: 'color-success', iconColor: 'light-color-success', title: 'total daily sales', icon: 'payments'}
  ]
}
