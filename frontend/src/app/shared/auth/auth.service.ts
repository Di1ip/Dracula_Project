import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public setemail(response:any)
  {
    // console.log(response)
    localStorage.setItem('email',response.data.email)
    localStorage.setItem('token',response.token)
  }
  public getemail()
  {
    return localStorage.getItem('email')
  }
  public getToken()
  {
    return localStorage.getItem('token')
  }
  public destroy()
  {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
  }
}
