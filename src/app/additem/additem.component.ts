import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  selectedFile !: File;
  imageUrl: string ='';

  constructor(private serviceobj:ServiceService,private router:Router){
  }
  onSubmit(data:any){
    this.serviceobj.createProduct(data.value).subscribe(res=>{
      alert("Posted Successfully");
      this.router.navigate(['Admin']);
    },err=>{
      alert("Something went wrong");
    })
  }
}
