import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/Prouctlist',pathMatch:'full'},
  {path:'Prouctlist' , component:ProductListComponent},
  {path:'cart' , component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
