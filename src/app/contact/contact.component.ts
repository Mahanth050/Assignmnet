import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router:Router,public serviceobj:ServiceService){

  }
  onSubmit(contactForm:any) {
    console.log(contactForm.value);
    this.serviceobj.contactdetails(contactForm.value).subscribe(res =>{},err=>{})

  }


}
