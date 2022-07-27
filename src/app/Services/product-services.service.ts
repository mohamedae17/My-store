import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { cart } from '../cart.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private carts: cart[] = [];
  private carts$ = new BehaviorSubject<cart[]>([]);
  private mycar: cart[] = [];
  private mycar$ = new BehaviorSubject<cart[]>([]);
  constructor(private http:HttpClient) { }

  getCarts():Observable<cart[]>{
    return this.carts$.asObservable();
  }

  loadItems(){
    return this.http.get<cart[]>("../../assets/data.json").subscribe((carts) => {
      this.carts = carts;
      this.carts$.next(this.carts);
    });
  }

  getItem(id:number) : Observable< cart | undefined >{
    return this.carts$.pipe(map((carts) => carts.find(carrt => carrt.id === id)));
  }

  add(cartaya: cart) {
    this.mycar.push(cartaya);
    this.mycar$.next(this.mycar);
  }
}
