import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: 'dashboard',    component: DashboardComponent },
            { path: 'categories',   component: CategoriesComponent },
            { path: 'products',     component: ProductsComponent },
            { path: 'purchase',     component: OrdersComponent },
            { path: 'sales',        component: SalesComponent }
        ]
    }
];
