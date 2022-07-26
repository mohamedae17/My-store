import { ProductServicesService } from './../Services/product-services.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { cart } from '../cart.model';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {
  carts$: Observable<cart[]> | undefined;
  @Input() element: cart | undefined;
  constructor(private service:ProductServicesService) {
    this.service.loadItems();
    this.carts$ = this.service.getCarts();
   }

  ngOnInit(): void {
  }

}
