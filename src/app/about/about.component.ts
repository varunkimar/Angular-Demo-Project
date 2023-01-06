import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mynums=[25,1,4,200,43];
  empList = [
    { eid: 101, fName: 'Sonu', salary: 90000 },
    { eid: 102, fName: 'Monu', salary: 95000 },
    { eid: 103, fName: 'Tonu', salary: 99000 },
    { eid: 104, fName: 'Gonu', salary: 98000 },
  ];
  myName='Shravan'
  sal=2000;
  empList2=[]
}
