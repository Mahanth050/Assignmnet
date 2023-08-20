import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  jsondata:any[]=[];
  constructor(private serviceobj:ServiceService){

  }
  ngOnInit(): void {
    this.serviceobj.getdata().subscribe((data)=>{
      this.jsondata = data;
    })

  }

}
