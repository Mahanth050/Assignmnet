import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  id: any;
  item: any;
  price: any;
  image: any;
  Sharedobj: any;

  constructor(private router:Router,public serviceobj:ServiceService){
  }
  ngOnInit():void{
    this.Sharedobj = this.serviceobj.getSharedData()
    console.log(this.Sharedobj);
    this.id = this.Sharedobj.id;
    this.item = this.Sharedobj.item;
    this.image=this.Sharedobj.image;
    this.price = this.Sharedobj.price;
  }
  onSubmit(form:any){
    console.log(form.value);
    if(form.valid){
      this.serviceobj.updateproduct(form.value).subscribe(res => {
        this.router.navigate(['Product']);
      }, err => {
        alert ('Something went wrong');
      })
    }
  }
  homeclick(){
    this.router.navigate(['Admin']);  
  }

}
