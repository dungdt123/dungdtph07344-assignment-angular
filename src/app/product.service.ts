import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Products } from './Products';
import { Observable } from 'rxjs';
import {HttpClient} from'@angular/common/http';
@Injectable()
export class ProductService {
  api='https://5e7e29bdfa19eb001651a71b.mockapi.io';
  products = data;

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.api);
  }
  getProduct(id): Observable<Products>{
    return this.http.get<Products>(`${this.api}/${id}`);
    
  }
  removeProduct(id): Observable<Products>{
    return this.http.delete<Products>(`${this.api}/${id}`);
    
  }
  addProduct(product){
    return this.http.post<Products>(`${this.api}`, product);
    
  }
  updateProduct(product){
     return this.http.put<Products>(`${this.api}/${product.id}`, product);
  }
}
