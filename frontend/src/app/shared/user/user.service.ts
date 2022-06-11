import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=''
  token:any
 
  constructor(private http:HttpClient,@Inject('baseUrl')_baseUrl:any,private auth:AuthService)
  { 
    this.baseUrl=_baseUrl
    this.token=this.auth.getemail()
  }
  adduser(form:any)
  {
    var header_object = new HttpHeaders().set('Authorization',this.token )
    return this.http.post(this.baseUrl+"/addUser",form,{headers:header_object})
  }
  getalluser()
  {
    var header_object = new HttpHeaders().set('Authorization',this.token )
    return this.http.get(this.baseUrl+"/userDetails",{headers:header_object})
  }
  userdetail(id:any)
  {
    var header_object = new HttpHeaders().set('Authorization',this.token )
    return this.http.get(this.baseUrl+"/userDetails/"+id,{headers:header_object})
  }
  deleteuser(id:any)
  {
    var header_object = new HttpHeaders().set('Authorization',this.token )
    return this.http.delete(this.baseUrl+"/deleteUser/"+id,{headers:header_object})
  }
  updateuser(id:any,form:any)
  {
    var header_object = new HttpHeaders().set('Authorization',this.token )
    return this.http.post(this.baseUrl+"/userUpdate/"+id,form,{headers:header_object})
  }
}
