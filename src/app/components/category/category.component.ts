import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _categoryService: CategoryService, 
              private _router: Router ) { }

  specialCategory: any = [];

  showModal;

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this._categoryService.getCategory()
    .subscribe(
      res => this.specialCategory = res,
      err => {
        console.log(err);
      } 
    )
  }

  moveToRegistration(){
    this._router.navigate(['/category-registration'])
  }

  goToProduct(){
    this._router.navigate(['/product']);
  }

}
