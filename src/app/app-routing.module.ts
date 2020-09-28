import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { PageComponent } from './components/shared/page/page.component';
import { CategoryRegistrationComponent } from './components/category-registration/category-registration.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';

const routes: Routes = [
  { path:'', redirectTo:'category', pathMatch:'full'},
  {path:'category',component:CategoryComponent},
  {path:'product', component:ProductComponent},
  {path:'category-registration', component:CategoryRegistrationComponent},
  {path: 'product-registration', component: ProductRegistrationComponent},
  {path:'**', component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
