import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url:any='http://localhost:3000/posts';
url1:any='http://localhost:3000/Products';
url3:any = 'http://localhost:3000/data';

  constructor(public obj:HttpClient) { }
  contactdetails(data:any): Observable<any>{
    return this.obj.post(this.url,data);
    
  }
  getdata():Observable<any>{
    return this.obj.get<any[]>(this.url1);
    
  }
  register(data:any){
    return this.obj.post(this.url3,data);
  }
  getusers():Observable<any>{
    return this.obj.get<any[]>(this.url3);
  }
  
  

}
