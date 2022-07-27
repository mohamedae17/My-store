import { ProductServicesService } from './../Services/product-services.service';
import { cart } from './../cart.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  carts$: Observable<cart[]> | undefined;
  cartproduct:any[] = [];
  constructor(private service:ProductServicesService) {
    this.service.loadItems();
    this.carts$ = this.service.getCarts();
   }

  ngOnInit(): void {

  }

  Add(event:any){
    if("cart" in localStorage){
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!);

      if(this.cartproduct.find(item => item.item.id == event.item.id && item.quantity == event.quantity)){
        //alert("Product in your cart already");
      }else if(this.cartproduct.find(item => item.item.id == event.item.id && item.quantity != event.quantity)){
        let exist = this.cartproduct.findIndex(item => item.item.id == event.item.id  && item.quantity != event.quantity );
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
