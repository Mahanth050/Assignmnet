import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:any ='';
  password:any='';
  users: any[] = [];

  constructor(private serviceobj:ServiceService, private router:Router){}
  ngOnInit(): void{
    this.serviceobj.getusers().subscribe((user)=>{this.users= user});
  }
  login(): void{
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    console.log(user);
    if (user) {
      console.log('Login successful');
      this.router.navigate(['Cart']);
    } else {
      console.log('Invalid credentials');
      alert('Invalid Credentials');
      this.router.navigate(['Login']);
    
    }

}
}
