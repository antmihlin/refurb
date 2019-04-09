import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsListComponent } from './components/products-list/products-list.component';
import {ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
