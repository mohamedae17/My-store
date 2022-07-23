import { ProductServicesService } from './../Services/product-services.service';
import { cart } from './../cart.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  carts$: Observable<cart[]> | undefined;
  constructor(private service:ProductServicesService) {
    this.service.loadItems();
    this.carts$ = this.service.getCarts();
   }

  ngOnInit(): void {

  }

}
