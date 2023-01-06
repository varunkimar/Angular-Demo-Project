import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private service:BackendService){

  };
  special=()=>{
    
  }

  allprods:any=[];
  getProd=()=>{
    this.service.getProducts()
    .subscribe((response)=>{
      console.log(response);
      this.allprods=response.valueOf();})
  //   console.log(response);
  // console.log(this.allprods);})
  }
  
}
