import { ProductServicesService } from './../Services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  posts:any;
  constructor(private service:ProductServicesService,private activatedrout:ActivatedRoute) { }
  dept:any;
  ngOnInit(): void {
    this.dept =this.activatedrout.snapshot.paramMap.get("id");
    this.dept--;
    this.service.getItems()
    .subscribe(response => {

      this.posts = response;

    });
  }

}
