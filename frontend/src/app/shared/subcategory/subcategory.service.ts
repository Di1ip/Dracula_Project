import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  baseurl = ''
  token: any

  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any,private auth:AuthService) 
  {
    this.baseurl =_baseurl
    this.token =this.auth.getemail()
   }
  
  addsubcategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/admin/addsubcategory",form,{ headers: header_object })
  }
  
  updatesubcategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/admin/updatesubcategory",form,{ headers: header_object })
  }
 
  deletesubCategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/admin/deletesubCategory",form,{ headers: header_object })
  }
}
