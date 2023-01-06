import { Component } from '@angular/core';

//it is a decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',//if we use templateurl, we need to attach html file
  // template: '<p>Home works..</p>',//if we use template, we can write html code here itself
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

//another way of writing
// class HomeComponent{

// }
// export default HomeComponent