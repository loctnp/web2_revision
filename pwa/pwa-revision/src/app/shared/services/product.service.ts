import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  // url:string = "https://dummyjson.com/products"
  url:string = "https://random-data-api.com/api/address/random_address"
  getSampleData():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url)
  }
}