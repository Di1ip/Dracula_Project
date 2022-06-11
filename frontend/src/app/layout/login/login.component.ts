import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class LoginComponent implements OnInit 
{
  loginform = new FormGroup(
    {
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required])
    }
  )
    toastrService : any ;
  constructor(private login : LoginService ,private router : Router, private auth : AuthService , private toastr: ToastrService , private spinner: NgxSpinnerService)
  { 
    
  }

  ngOnInit(): void 
  {
    console.log(this.auth.getemail())
    if(this.auth.getemail() != null)
    {
      this.router.navigateByUrl('/login');
    }
     this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 2000);
  }
  submit()
  {
    this.spinner.show()
    // if(this.loginform.value.email == "admin@admin.com" && this.loginform.value.password == "123")
    //   {
    //     //console.log('confirmed');
    //     this.auth.setemail(this.loginform.value.email)
    //     this.router.navigateByUrl("/layout/adminlayout/admindashboard");
    //     this.toastr.success('Login Successful!');
    //     this.spinner.show();
    //     setTimeout(() => 
    //       {
    //         this.spinner.hide();
    //       }, 5000);
    //   }
    //   else
    //   {
    //     // console.log('not validate');
    //     this.toastr.error('Not valid');
    //     this.spinner.show();
    //     setTimeout(() => 
    //       {
    //         this.spinner.hide();
    //       }, 5000);
    //   }
      console.log(this.loginform.value)
      this.login.getlogin(this.loginform.value).subscribe((res:any)=>
      {
        console.log(res)
        this.spinner.hide()
        if(res.success)
          {
            this.auth.setemail(res)
            this.toastr.success('success',res.message)
            this.router.navigateByUrl('/layout/adminlayout/admindashboard')
          }
        else
          {
            this.toastr.error('error! login time',res.message) 
          }
      },
      err=>
      {
        this.spinner.hide()
      })
  }
}