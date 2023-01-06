import { Component } from "@angular/core";
@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html'
})
export class ContactComponent{
    firstName='';
    fn='';
    ln='';
    em='';
    pn='';
    lastName='';
    email='';
    phoneno='';
    fun=()=>{
        this.fn=this.firstName;
        this.ln=this.lastName;
        this.em=this.email;
        this.pn=this.phoneno;
        this.firstName='';
        this.lastName='';
        this.email='';   
        this.phoneno='';

    }

}