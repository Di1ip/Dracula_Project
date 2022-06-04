import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl=''
  token:any
 
  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any,private auth:AuthService)
  { 
    this.baseurl=_baseurl
    this.token=this.auth.getemail()
  }
  userDetail(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/userDetails",form,{headers:header_object})
  }
  deleteUser(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/deleteUser",form,{headers:header_object})
  }
}
