import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  jsondata: any[] = [];
  constructor(private serviceobj: ServiceService, private router: Router,public location: Location,) {

  }
  ngOnInit(): void {
    this.serviceobj.getdata().subscribe((data) => {
      this.jsondata = data;
    })

  }

  homeclick() {
    this.router.navigate(['Home']);

  }
  cartclick() {
    this.router.navigate(['Cart']);

  }
  contactclick() {
    this.router.navigate(['Contact']);

  }
  loginclick() {
    this.router.navigate(['Login']);

  }
  registerclick() {
    this.router.navigate(['Register']);

  }
  
  Logout() {


    this.router.navigate(['/Login']);
    this.location.replaceState('/');
  }
}

