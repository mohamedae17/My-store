import { ProductServicesService } from '../Services/product-services.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from '../cart.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() post: cart | undefined;
  constructor(private service:ProductServicesService,private router: Router) {}

  ngOnInit() {

}

GoToProductDetail(post:any){
  this.router.navigate(["/Prouctlist",post.id]);
}

added(){
  alert("Added to cert!");
}
}
