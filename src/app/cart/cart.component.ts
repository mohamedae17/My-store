import { cart } from './../cart.model';
import { Observable } from 'rxjs';
import { ProductServicesService } from './../Services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  elements: any;
  total: number = 0;
  carts$: Observable<cart[]> | undefined;
  constructor(private prosuctServ: ProductServicesService, private route: Router) { }

  ngOnInit(): void {
    //this.prosuctServ.loadcar();
    // this.elements = this.prosuctServ.getCarts();
    this.calculate();
  }
  addTocart(event:any){
    console.log(event);
    // console.log("DDDDD");
  }
  calculate(): void{
    //
  }
}
