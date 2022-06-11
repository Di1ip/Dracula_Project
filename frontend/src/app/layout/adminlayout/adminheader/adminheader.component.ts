import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private auth:AuthService ,private route:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.auth.destroy();
    this.route.navigateByUrl('/login')
  }
}
