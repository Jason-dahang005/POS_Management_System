import { Component, Input } from '@angular/core';
import { CategoryTableComponent } from '../category-table/category-table.component';
import { ContainerComponent } from '../container/container.component';
import { AdminMainContentBodyComponent } from '../admin-main-content-body/admin-main-content-body.component';
import { AdminMainContentHeaderComponent } from '../admin-main-content-header/admin-main-content-header.component';
import { CreateCategoryButtonComponent } from '../create-category-button/create-category-button.component';
import { ContentHeaderComponent } from '../content-header/content-header.component';
import { ContentTitleComponent } from '../content-title/content-title.component';
import { ContentActionsComponent } from '../content-actions/content-actions.component';
import { ContentBodyComponent } from '../content-body/content-body.component';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    ContainerComponent,
    AdminMainContentBodyComponent,
    AdminMainContentHeaderComponent,
    CreateCategoryButtonComponent,
    ContentHeaderComponent,
    ContentTitleComponent,
    ContentActionsComponent,
    ContentBodyComponent,
    CategoryTableComponent,
    SearchInputFieldComponent,
    CreateCategoryButtonComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  title: string = 'categories'
}
