import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  navlinks = [
    { name: 'dashboard', link: '/admin/dashboard', icon: 'dashboard' },
    { name: 'categories', link: '/admin/categories', icon: 'category'},
    { name: 'products', link: '/admin/products', icon: 'shopping_bag'},
    { name: 'purchase', link: '/admin/purchase', icon: 'receipt_long'},
    { name: 'sales', link: '/admin/sales', icon: 'paid'} 
  ]
}
