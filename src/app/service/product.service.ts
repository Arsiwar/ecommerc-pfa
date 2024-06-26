import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //a partir de quelle @ on peut recuperer les donnees 
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient)  { }
  
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.products)
    );
    }
  getProduct(theId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${theId}`);
  }
    }
    
    interface GetResponse {
    _embedded: {
    products: Product[];
    }
}
