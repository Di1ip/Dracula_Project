import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginService } from 'src/app/shared/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl('')
    }
  )
    toastrService : any ;
  constructor(private login : LoginService ,private router : Router, private auth : AuthService , private toastr: ToastrService , private spinner: NgxSpinnerService)
  { 
    
  }
 
  ngOnInit(): void 
  {
    // console.log(this.auth.getemail())
    if(this.auth.getemail() != null)
    {
      this.router.navigateByUrl('/layout/adminlayout/dashboard');
    }
     this.spinner.show();
      setTimeout(() => {
       this.spinner.hide();
     }, 2000);

  }
  submit()
  {
    this.spinner.show()
      this.login.login(this.loginform.value).subscribe((res:any)=>
      {
         this.spinner.hide()
        if(res.success)
          {
            this.auth.setemail(this.loginform.value.email)
            this.toastr.success('Successfull', res.message)
            this.router.navigateByUrl('/layout/adminlayout/dashboard')
          }
          else
          {
            this.toastr.error('error!',res.message) 
          }
      },
      err=>
      {
        this.spinner.hide()
      })
  }
}
