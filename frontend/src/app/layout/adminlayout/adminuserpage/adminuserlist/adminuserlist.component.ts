import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/shared/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {
  id:any
  constructor(private spinner:NgxSpinnerService, private user :UserService ,private route:Router) { }

  ngOnInit(): void 
  {
    this.getdata()
  }
  alluser = []
  getdata()
  {
    this.spinner.show();
    this.user.getalluser().subscribe((res:any)=>
    {
      this.spinner.hide();
      this.alluser = res.data;
    },
    err =>
    {
      this.spinner.hide()
    }
    )
  }
  delete(id:any)
  {
    // Swal.fire
    // (
    //   {
    //     title:'Are you sure',
    //     text:'You want be able to revert this',
    //     icon:'warning',
    //     showCancelButton:true,
    //     confirmButtonColor:'#3085d6',
    //     cancelButtonColor:'#d33',
    //     confirmButtonText:'Yes, delete it',
    //   }
    // ).then((result)=>
    //         {
    //           if(result.isConfirmed)
    //             {
    //               this.user.deleteuser(this.d).subscribe
    //                 (
    //                   (res:any)=>
    //                     {
    //                       this.getdata()
    //                       Swal.fire
    //                         (
    //                           'Deleted!',
    //                           'Your file has been deleted.',
    //                           'success'
    //                         )
    //                     },
    //                     err =>
    //                       {
    //                         Swal.fire
    //                           (
    //                             'Error!',
    //                             'Try again',
    //                             'error'
    //                           )
    //                       }
    //                 )
    //             }
    //         }
    //       )
  }
}
