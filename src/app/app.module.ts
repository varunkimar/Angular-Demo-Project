import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { PagentfndComponent } from './pagentfnd/pagentfnd.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CartdispComponent } from './cartdisp/cartdisp.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

//Routing
// const routes:Routes=[
//   {path: 'product',
//   component:ProductComponent},
//   {path:'about',
//    component:AboutComponent},
//    {path:'service',
//    component:ServicesComponent},
//    {path:'contact',
//    component:ContactComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    ServicesComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    EmpComponent,
    PagentfndComponent,
    HeaderComponent,
    RegisterComponent,
    LogoutComponent,
    SearchComponent,
    ProductdetailsComponent,
    CartComponent,
    OrderComponent,
    CartdispComponent,
    PaymentComponent,
    PaymentsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }
