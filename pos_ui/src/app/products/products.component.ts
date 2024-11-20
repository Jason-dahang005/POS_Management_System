import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { AdminMainContentBodyComponent } from '../admin-main-content-body/admin-main-content-body.component';
import { AdminMainContentHeaderComponent } from '../admin-main-content-header/admin-main-content-header.component';
import { ContentHeaderComponent } from '../content-header/content-header.component';
import { ContentTitleComponent } from '../content-title/content-title.component';
import { ContentActionsComponent } from '../content-actions/content-actions.component';
import { ContentBodyComponent } from '../content-body/content-body.component';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';
import { CreateProductButtonComponent } from '../create-product-button/create-product-button.component';
import { ProductTableComponent } from '../product-table/product-table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ContainerComponent,
    ContentHeaderComponent,
    ContentTitleComponent,
    ContentActionsComponent,
    ContentBodyComponent,
    SearchInputFieldComponent,
    CreateProductButtonComponent,
    ProductTableComponent

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = 'products'
}
