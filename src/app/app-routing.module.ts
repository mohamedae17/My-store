import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/Prouctlist',pathMatch:'full'},
  {path:'Prouctlist' , component:ProductListComponent},
  {path:'cart' , component:CartComponent},
  {path:'Prouctlist/:id',component:CartItemDetailsComponent},
  {path: 'success/:firstname/:total', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
