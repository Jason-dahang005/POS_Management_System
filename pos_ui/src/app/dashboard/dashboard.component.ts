import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BoxComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
