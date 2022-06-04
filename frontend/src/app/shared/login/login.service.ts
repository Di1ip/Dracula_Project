import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: any;

  constructor( private http : HttpClient, @Inject('baseUrl')_baseUrl : any ) 
  {
    this.baseUrl=_baseUrl  
  }
  login(form:any)
  {
    return this.http.post(this.baseUrl+'/login',form);
  }
}
