import { Injectable } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) { }

  getItems() : Observable<ProductItemComponent>{
    return this.http.get<ProductItemComponent>("../../assets/data.json");
  }
}
