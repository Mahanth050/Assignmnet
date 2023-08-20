import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private router:Router,public serviceobj:ServiceService){

  }

  onSubmit(registerForm:any){
    this.serviceobj.register(registerForm.value).subscribe(res=>{
      alert("Registerd succesfully");
    },err=>{
      alert("Not Registered");
    });
    this.router.navigate(['Login']);
  }



}
