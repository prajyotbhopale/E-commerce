import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ApiService } from '../api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { productsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    productsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
