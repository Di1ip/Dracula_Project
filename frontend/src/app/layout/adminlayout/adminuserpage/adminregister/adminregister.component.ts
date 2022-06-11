import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  register = new FormGroup(
    {
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
    }
  )

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService ,private user: UserService) { }

  ngOnInit(): void {
  }
  
  submit()
  {
    this.spinner.show()
    console.log(this.register.value)
    this.user.adduser(this.register.value).subscribe((res:any)=>
        {
          console.log(res)
          this.spinner.hide()
          if(res.success)
          {
            this.toastr.success('success!',res.message)
          }
          else
          {
            this.toastr.error('error!',res.message)
          }
        },
        err =>
        {
          this.spinner.hide()
        }
    )
  }
}
