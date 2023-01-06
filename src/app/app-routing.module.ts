import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartdispComponent } from './cartdisp/cartdisp.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagentfndComponent } from './pagentfnd/pagentfnd.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent},
  {path:'emp',
    component:EmpComponent},
  {path:'login',
    component:LoginComponent},
  {path:'logout',
    component:LogoutComponent},
  {path:'register',
    component:RegisterComponent},
  {path:'*',
    component:PagentfndComponent},
    {path:'product',
  component:ProductComponent},
  {path:'productdetails/:pname',
component:ProductdetailsComponent},

{path:'cart/:pid',
component:CartComponent},
{path:'cart',
component:CartComponent},
{path:'cartdisp',
component:CartdispComponent},
{path:'payment',
component:PaymentComponent},
{path:'paymentsuccess',
component:PaymentsuccessComponent}
    //for an error page display, if the any of the above paths 
    //doesnot match then this is executed. The other path ways are: *,*/,**
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//routing can also be done in app.module.ts file 