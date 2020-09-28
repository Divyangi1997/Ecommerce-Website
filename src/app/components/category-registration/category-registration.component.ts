import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-category-registration',
  templateUrl: './category-registration.component.html',
  styleUrls: ['./category-registration.component.css']
})
export class CategoryRegistrationComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    categoryId: new FormControl(null, Validators.required),
    categoryName: new FormControl(null, Validators.required)
  })

  constructor(private _categoryService: CategoryService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  moveToCategory(){
    this._router.navigate(['/category']);
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid Form'); return;
    } 

    this._categoryService.registerCategory(this.registerForm.value)
    .subscribe(
      res => {
        console.log(res);
        M.toast({ html: 'saved successfully', classes: 'rounded'});
        this._router.navigateByUrl('/category');
      },
      err => {
        console.log(err);
      }
    );
  }

}
