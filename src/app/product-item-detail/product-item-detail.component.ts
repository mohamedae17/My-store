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
  @Input() cart: cart | undefined;
  // myform = new FormGroup({
  //   task: new FormControl('', [Validators.required])
  // });
  constructor(private service:ProductServicesService,private activatedrout:ActivatedRoute) { }
  dept:any;
  cartproduct:any[] = [];
  @Output() first = new EventEmitter();
  ngOnInit(): void {
    this.dept =this.activatedrout.snapshot.paramMap.get("id");
    this.dept++;
    this.dept--;
    this.service.loadItems();
    this.service.getCarts().subscribe(res =>{
      this.posts = res;
      this.cart = this.getProductById(this.dept);
    })
    //  this.posts = this.service.getCarts();
    //  this.cart = this.getProductById(this.dept);
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
    // this.service.add(this.myform.get('task')?.value ?? '');
    // this.myform.reset();
    // this.service.addToCart(newcart);

  }


}
