import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl=''
  token:any
 
  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any,private auth:AuthService)
  { 
    this.baseurl=_baseurl
    this.token=this.auth.getemail()
  }
  bookDetail(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/bookDetail",form,{headers:header_object})
  }
  addBook(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/addBook",form,{headers:header_object})
  }
  updateBook(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/updateBook",form,{headers:header_object})
  }
  deleteBook(form:any)
  {
    var header_object=new HttpHeaders().set('Autherization',this.token);
    return this.http.post(this.baseurl+"/deleteBook",form,{headers:header_object})
  }
}
