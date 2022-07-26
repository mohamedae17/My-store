import { ProductServicesService } from '../Services/product-services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from '../cart.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() post: cart | undefined;
  @Output() second= new EventEmitter();
  amount:number = 0;
  options:any;

  constructor(private service:ProductServicesService,private router: Router) {
    this.options = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit() {

}

GoToProductDetail(post:any){
  this.router.navigate(["/Prouctlist",post.id]);
}

added(post:any,event:any){
  const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
  post.amount = parseInt(selectedOption) ;
    this.second.emit({item:this.post,quantity: selectedOption})
  // alert("Added to cert!");

}
}
