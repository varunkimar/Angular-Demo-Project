import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-cartdisp',
  templateUrl: './cartdisp.component.html',
  styleUrls: ['./cartdisp.component.css']
})
export class CartdispComponent {
  constructor(private service:BackendService){
    this.special();
  }
  cartprodlist:any=[];
  quantity:number=1;
  special=()=>{
  this.service.getcart()
      .subscribe((response) => {
        console.log(response);
        this.cartprodlist=response.valueOf();
      })  
    }
}
