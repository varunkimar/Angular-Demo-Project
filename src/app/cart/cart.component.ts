import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  pid: any;
  product: any = [];
  cartprodlist:any=[];
  quantity:number=0;
  temp:number=0;
  constructor(private service: BackendService,private route:ActivatedRoute,private router:Router) {
    
  }
  ngOnInit(): void {
    this.special();
  }  
  special = () => {
    // if(this.t==0){
    this.route.params.subscribe((params) => {
      this.pid = params['pid'];
      
    });
    // this.temp==0 && this.quantity==0
    this.service.getProductsById(this.pid)
        .subscribe((response) => {
          console.log(response);
          this.product = response.valueOf();

          this.service.getcart()
          .subscribe((response) => {
          console.log(response);
          this.cartprodlist=response.valueOf();

          // here 

          console.log(this.cartprodlist.length);

          var newvalue=1;
          this.product[0].quantity=newvalue;
          console.log(this.product[0]);
          if(this.cartprodlist.length!=0){
            console.log(this.temp);
            // var newkey="quantity";
            this.service.addtocart(this.product[0])
            .subscribe(res => console.log(res));
            this.quantity+=1;
            this.temp=1;
          }
          else{
           
            console.log(this.cartprodlist);
              
                this.service.addtocart(this.product[0])
                .subscribe(res => console.log(res));
                // this.quantity=1;
                
            // const s=this.cartprodlist.find(({id})=>id===this.product[0].id);
          }

          })
          
        });
    
    alert("product has been added to the cart successfully");
    this.router.navigate(['/product']);
  }
  
}

// deletecart=()=>{
  //   this.service.emptycart().subscribe();
  // }


// this.service.getProductsById(this.pid)
    //   .subscribe((response) => {
    //     console.log(response);
    //     this.product = response.valueOf();


    //     // code 
    //   });

    // console.log(this.product);
    // this.service.addtocart(this.product)
    //   .subscribe();




    
    // this.service.getcart()
    //   .subscribe((response) => {
    //     console.log(response);
    //     this.cartprodlist=response.valueOf();
    //   })    