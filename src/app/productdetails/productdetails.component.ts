import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  constructor(private service:BackendService,private route:ActivatedRoute){
    // this.special();
  }
  // prodname:any;
  pnamee:any;
  product:any=[];
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.pnamee=params['pname'];
      console.log(params);
      console.log(this.pnamee);
      this.service.getProductsl(this.pnamee)
      .subscribe((response)=>{
      console.log(this.pnamee);
      console.log(response);
      this.product=response.valueOf();
      console.log(this.product);
    });
    })
    
    

    // this.prodname=this.route.snapshot.params['productname'];
  }
  // prod:any;
  
  // prodsearch=(prodname:any)=>{}
  
  // special=()=>{

  
  
  // this.prodsearch=($event:any)=>{
  //   this.prod=$event.target.value;
  // } 
  // this.searchString=(prodname:any)=>{
  //   this.service.getProductsl(this.prodname)
  //   .subscribe((response)=>{
  //     console.log(this.prodname);
  //     console.log(response);
  //     this.product=response.valueOf();
  //   })

}
