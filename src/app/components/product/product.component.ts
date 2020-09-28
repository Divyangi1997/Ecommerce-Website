import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _productService: ProductService,
              private _router: Router) { }

  specialProduct: any = []

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this._productService.getProduct()
    .subscribe(
      res => this.specialProduct = res, 
      err => {
        console.log(err);
      }
    )
  }

  onEdit(product: Product){
    this._productService.selectedProduct = product;
  }

  onDelete(_id: string) {
    if(confirm('Are you sure to to delete this record ?') == true) {
      this._productService.deleteProduct(_id)
        .subscribe((res) => {
        this.getProduct();
      })
    }
  }

  moveToRegistration(){
    this._router.navigate(['/product-registration']);
  }
}
