import { ProductServicesService } from './../Services/product-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  posts:any;
  cart:any;
  myform = new FormGroup({
    task: new FormControl('', [Validators.required])
  });
  constructor(private service:ProductServicesService,private activatedrout:ActivatedRoute) { }
  dept:any;
  ngOnInit(): void {
    this.dept =this.activatedrout.snapshot.paramMap.get("id");
    this.dept--;
  }

  added(){
    alert("Added to cert!");
    this.service.add(this.myform.get('task')?.value ?? '');
    this.myform.reset();
  }

}
