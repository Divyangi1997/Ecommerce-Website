import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';

const headerOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Url = environment.apiBaseUrl + '/product';

  selectedProduct: Product;
  products: Product[];

  constructor(private _httpClient: HttpClient) { }

  getProduct(){
    return this._httpClient.get(environment.apiBaseUrl + '/product', headerOption);
  }

  registerProduct(product: Product){
    return this._httpClient.post(environment.apiBaseUrl + '/product', product, headerOption);
  }

  updateProduct(product: Product){
    return this._httpClient.put(environment.apiBaseUrl+ '/product' + `/${product._id}`, product, headerOption);
  }

  deleteProduct(_id: string){
    return this._httpClient.delete(this.Url + `/${_id}`, headerOption);
  }
}
