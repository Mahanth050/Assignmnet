import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  Logout(){
    this.router.navigate(['/Login']);
    this.location.replaceState('/');
  }

  update(data:any){
    this.serviceobj.setSharedData(data);
    this.router.navigate(['Admin']);

  }

 
  jsondata: any[] = [];
  constructor(private serviceobj: ServiceService, private router: Router,public location: Location,) {

  }
  ngOnInit(): void {
    this.serviceobj.getdata().subscribe((data) => {
      this.jsondata = data;
    })

    

}
}
