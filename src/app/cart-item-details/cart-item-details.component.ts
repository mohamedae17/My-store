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
  cartproduct:any[] = [];
  constructor(private service:ProductServicesService) {}

  ngOnInit(): void {
  }

  Add(event:any){
    if("cart" in localStorage){
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!);
      if(this.cartproduct.find(item => item.item.id == event.item.id && item.quantity == event.quantity)){
        alert("Product in your cart already");
      }else if(this.cartproduct.find(item => item.item.id == event.item.id && item.quantity != event.quantity)){
        let exist = this.cartproduct.findIndex(item => item.item.id == event.item.id  && item.quantity != event.quantity );
        alert(exist);
        console.log(this.cartproduct[exist].quantity );
        console.log(event.quantity);
         this.cartproduct[exist].item.amount = parseInt(event.quantity);
         this.cartproduct[exist].quantity = event.quantity;
         localStorage.setItem("cart", JSON.stringify(this.cartproduct));
      }
      else{
        this.cartproduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartproduct));
      }
    }else{
      this.cartproduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartproduct));
    }
  }

}
