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
  constructor(private prosuctServ: ProductServicesService, private route: Router) { }

  ngOnInit(): void {
    this.calculate();
  }

  calculate(): void{
    //
  }
}
