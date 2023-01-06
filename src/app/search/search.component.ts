import { Component, Input } from '@angular/core';
import { BackendService } from '../backend.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service:BackendService){

  }
  prod:any;
  prodsearch=($event:any)=>{
    this.prod=$event.target.value;
  }
  // product:any=[];
  // searchString=()=>{
  //   this.service.getProductsl(this.prod)
  //   .subscribe((response)=>{
  //     this.product=response.valueOf();
  //   })
    // this.router.navigate(['/search']);
  }
