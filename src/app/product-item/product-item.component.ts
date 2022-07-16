import { ProductServicesService } from './../Services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  posts:any;
  constructor(private service:ProductServicesService,private router: Router) {}



  ngOnInit() {

    this.service.getItems()

      .subscribe(response => {

        this.posts = response;

      });

}

GoToProductDetail(post:any){
  this.router.navigate(["/Prouctlist",post.id]);
}

}
