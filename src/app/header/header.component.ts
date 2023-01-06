import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service:BackendService, private router:Router){

  }
  prod:any;

  

  product:any=[];
  searchString=()=>{
    this.service.getProductsl(this.prod)
    .subscribe((response)=>{
      this.product=response.valueOf();
    })
    this.router.navigate(['/search']);
  }
}

