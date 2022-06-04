import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseurl = ''
  token: any


  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any, private auth: AuthService) {
    this.baseurl = _baseurl
    this.token = this.auth.getToken()
  }

  addcategory(form: any)
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/admin/addcategory", form, { headers: header_object })
  }
  allcategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/admin/allcategory", form, { headers: header_object })
  }
  updatecategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/updatecategory", form, { headers: header_object })
  }
  deleteCategory(form: any) 
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/deleteCategory", form, { headers: header_object })
  }
  selectSingleCategory(form:any)
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/selectSingleCategory", form, { headers: header_object })
  }
  categorydetail(form:any)
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/categorydetail", form, { headers: header_object })
  }
  getallCategory(form:any)
  {
    var header_object = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(this.baseurl + "/getallCategory", form, { headers: header_object })
  }
}
