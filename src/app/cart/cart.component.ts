import { cart } from './../cart.model';
import { Observable } from 'rxjs';
import { ProductServicesService } from './../Services/product-services.service';
import { Component, Input, OnInit } from '@angular/core';
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
  // carts$: Observable<cart[]> | undefined;
  // @Input() element: cart | undefined;
  constructor(private service:ProductServicesService, private route: Router) {
    this.service.loadItems();
    this.carts$ = this.service.getCarts();
   }
  // constructor(private prosuctServ: ProductServicesService) { }

  ngOnInit(): void {

    //this.prosuctServ.loadcar();
    // this.elements = this.prosuctServ.getCarts();
    if("cart" in localStorage){
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!);
    }
    this.calculate();
  }
  addTocart(event:any){
    console.log(event);
    // console.log("DDDDD");
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
    //
    this.total=0;
    for(let x in this.cartproduct){
      this.total += this.cartproduct[x].item.price * this.cartproduct[x].quantity;
    }
  }
}
