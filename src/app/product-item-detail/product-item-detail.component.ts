import { Observable } from 'rxjs';
import { cart } from './../cart.model';
import { ProductServicesService } from './../Services/product-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  posts:any;
  Id:any;
  cartproduct:any[] = [];
  @Input() cart: cart | undefined;
  @Output() first = new EventEmitter();
  constructor(private service:ProductServicesService,private activatedrout:ActivatedRoute) { }
  ngOnInit(): void {
    this.Id = this.activatedrout.snapshot.paramMap.get("id");
    this.Id= parseInt(this.Id);
    this.service.loadItems();
    this.service.getCarts().subscribe(res =>{
      this.posts = res;
      this.cart = this.getProductById(this.Id);
    })
  }

   getProductById(id: number | null): cart{
     return this.posts.filter((product: { id: number | null; }) => product.id === id)[0];
   }

  added(cart:any,event:any){
    alert("Added to cert!");
    const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
    cart.amount = parseInt(selectedOption) ;
    console.log(cart);
    this.first.emit({item:cart,quantity: selectedOption});
  }


}
