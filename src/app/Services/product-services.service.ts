import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { cart } from '../cart.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  myStorage = window.localStorage;
  private carts: cart[] = [];
  private carts$ = new BehaviorSubject<cart[]>([]);
  private mycar: cart[] = [];
  private mycar$ = new BehaviorSubject<cart[]>([]);
  constructor(private http:HttpClient) { }

  // addToCart(product: cart[] | undefined): void{
  //   this.myStorage.setItem('cart', JSON.stringify(product));
  // }
  // getCartProduct(): cart[] | []{
  //   const getProduct = this.myStorage.getItem('cart')
  //   return getProduct? JSON.parse(getProduct): [];
  // }

  getCarts():Observable<cart[]>{
    return this.carts$.asObservable();
  }

  // getmycar():Observable<cart[]>{
  //   return this.mycar$.asObservable();
  // }
  // loadcar(){
  //   return this.http.get<cart[]>("../../assets/data.json").subscribe((carts) => {
  //     this.mycar;
  //     this.mycar$.next(this.mycar);
  //   });
  // }

  loadItems(){
    return this.http.get<cart[]>("../../assets/data.json").subscribe((carts) => {
      this.carts = carts;
      this.carts$.next(this.carts);
    });
  }

  getItem(id:number) : Observable< cart | undefined >{
    // this.newcart = this.http.get<ProductItemComponent>("../../assets/data.json");
    // return this.newcart.getItems().subscribe(arg => this.property = arg);
    return this.carts$.pipe(map((carts) => carts.find(carrt => carrt.id === id)));
  }

  add(cartaya: cart) {
    this.mycar.push(cartaya);
    this.mycar$.next(this.mycar);
  }
}
