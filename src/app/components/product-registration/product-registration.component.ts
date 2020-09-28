import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    productId: new FormControl(null, Validators.required),
    productName: new FormControl(null, Validators.required),
    categoryId: new FormControl(null, Validators.required)  
  })

  constructor(private _productService: ProductService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid Form'); return;
    } 

    this._productService.registerProduct(this.registerForm.value)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigateByUrl('/product');
      },
      err => {
        console.log(err);
      }
    );
  }

  moveToProduct(){
    this._router.navigate(['/product'])
  }


}
