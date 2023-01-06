import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  constructor(private service:BackendService){ 
    this.empId=0;
  };
  empId:any;
  empData:any={
      id:'',
      name: '',
      username: '',
      email: ''
  };

  setEId=($event:any)=>{
    // console.log($event);
    this.empId=$event.target.value;
  }
  
  allEmps:any=[];
  getEmpById=()=>{
    this.service.getEmployeeById(this.empId)
    .subscribe((response)=>
    {console.log(response);
      this.empData = response.valueOf()});
    console.log(this.empData);
  };
  getAllEmps=()=>{
    this.service.getAllEmployees()
    .subscribe((response)=>{
      this.allEmps=response.valueOf()});
  };

  loggedInData = {
        name:'',
        username:'',
        email:''
      };
    
      submittedData = {
        name:'',
        username:'',
        email:''
      };
      employee:any;
    
      addData = (employee: any) => {
        console.log(employee.value);
        this.submittedData =employee.value;
        this.addEmp(this.submittedData);
      };
  addEmp=(submittedData:any)=>{
    // this.submittedData=this.loggedInData;
    this.service.addEmployee(submittedData)
    .subscribe((response)=>{console.log(response.valueOf())
    this.empData=response.valueOf()})
    
    this.getEmpById();
  }
}


//different method of subscribe if id is not present in the database

// this.service.getEmployeeById(this.empId)
// .subscribe({
//   next:(response)=>{this.empData = response.valueOf()},
//   error:(error)=>{console.log(error)},
//   complete:()=>{console.log('finally done!');}
//     });