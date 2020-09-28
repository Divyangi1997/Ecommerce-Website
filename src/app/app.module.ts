import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PageComponent } from './components/shared/page/page.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './components/services/category.service';
import { ProductService } from './components/services/product.service';
import { CategoryRegistrationComponent } from './components/category-registration/category-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    ProductComponent,
    CategoryComponent,
    CategoryRegistrationComponent,
    ProductRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgxPaginationModule
  ],
  providers: [CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* Some of the packages are not install on my machine in angular that's 
why pagination is not implemented on my client side */
