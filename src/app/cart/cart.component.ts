import { cart } from './../cart.model';
import { Observable } from 'rxjs';
import { ProductServicesService } from './../Services/product-services.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  elements: any;
  total: number = 0;
  cartproduct:any[] = [];
  carts$: Observable<cart[]> | undefined;
  firstName:any;
  address:any;
  creditCard:any;
  constructor(private service:ProductServicesService, private route: Router) {
    this.service.loadItems();
    this.carts$ = this.service.getCarts();
   }

  ngOnInit(): void {
    if("cart" in localStorage){this.cartproduct = JSON.parse(localStorage.getItem("cart")!);}
    this.calculate();
  }

  parseeINt(element:any){
    return parseInt(element.quantity);
  }
  update(element:any,id:number,event:any){
    console.log(event.target.value);
    const selectedOption = event.target.value;
    element.quantity = parseInt(selectedOption);
    if(element.quantity == 0){
      console.log("DDDDd");
       console.log(id);
      this.cartproduct.splice(id,1);
    }
    localStorage.setItem("cart", JSON.stringify(this.cartproduct));
    this.calculate();
  }
  calculate(): void{
    this.total=0;
    for(let x in this.cartproduct){
      this.total += this.cartproduct[x].item.price * this.cartproduct[x].quantity;
    }
  }

  success(firstName: string,total:number): void{
    this.route.navigateByUrl(`success/${firstName}/${total}`);
  }
}
