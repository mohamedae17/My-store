import { ProductServicesService } from './../Services/product-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  posts:any;
  constructor(private service:ProductServicesService) {}



  ngOnInit() {

    this.service.getItems()

      .subscribe(response => {

        this.posts = response;

      });

}

}
