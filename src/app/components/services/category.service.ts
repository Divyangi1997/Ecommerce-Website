import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory: Category;
  categories: Category[];

  constructor(private _httpClient: HttpClient) { }

  getCategory() {
    return this._httpClient.get(environment.apiBaseUrl + '/category')
  }

  registerCategory( category: Category) {
    return this._httpClient.post(environment.apiBaseUrl + '/category', category)
  }
}
