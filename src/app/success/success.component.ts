import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name:any;
  total:any;
  constructor(private activatedrout:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedrout.snapshot.paramMap.get("firstname");
    this.total = this.activatedrout.snapshot.paramMap.get("total");
  }

}
