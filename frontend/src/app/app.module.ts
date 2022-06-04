import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './layout/adminlayout/adminheader/adminheader.component';
import { AdminsidebarComponent } from './layout/adminlayout/adminsidebar/adminsidebar.component';
import { AdminfooterComponent } from './layout/adminlayout/adminfooter/adminfooter.component';
import { AdmindashboardComponent } from './layout/adminlayout/admindashboard/admindashboard.component';
import { AdminbasicelementComponent } from './layout/adminlayout/adminbasicelement/adminbasicelement.component';
import { AdminbuttonComponent } from './layout/adminlayout/adminbasicelement/adminbutton/adminbutton.component';
import { AdmindropdownComponent } from './layout/adminlayout/adminbasicelement/admindropdown/admindropdown.component';
import { AdmintypographyComponent } from './layout/adminlayout/adminbasicelement/admintypography/admintypography.component';
import { AdminformelementComponent } from './layout/adminlayout/adminformelement/adminformelement.component';
import { AdmintableComponent } from './layout/adminlayout/admintable/admintable.component';
import { AdminchartComponent } from './layout/adminlayout/adminchart/adminchart.component';
import { AdminiconComponent } from './layout/adminlayout/adminicon/adminicon.component';
import { AdminuserpageComponent } from './layout/adminlayout/adminuserpage/adminuserpage.component';
import { AdminaddbookComponent } from './layout/adminlayout/adminuserpage/adminaddbook/adminaddbook.component';
import { AdminbooklistComponent } from './layout/adminlayout/adminuserpage/adminbooklist/adminbooklist.component';
import { AdminuserlistComponent } from './layout/adminlayout/adminuserpage/adminuserlist/adminuserlist.component';
import { AdminregisterComponent } from './layout/adminlayout/adminuserpage/adminregister/adminregister.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './layout/login/login.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import { UserheaderComponent } from './layout/userlayout/userheader/userheader.component';
import { UsersidebarComponent } from './layout/userlayout/usersidebar/usersidebar.component';
import { UserfooterComponent } from './layout/userlayout/userfooter/userfooter.component';
import { UserdashboardComponent } from './layout/userlayout/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminsidebarComponent,
    AdminfooterComponent,
    AdmindashboardComponent,
    AdminbasicelementComponent,
    AdminbuttonComponent,
    AdmindropdownComponent,
    AdmintypographyComponent,
    AdminformelementComponent,
    AdmintableComponent,
    AdminchartComponent,
    AdminiconComponent,
    AdminuserpageComponent,
    AdminaddbookComponent,
    AdminbooklistComponent,
    AdminuserlistComponent,
    AdminregisterComponent,
    LoginComponent,
    UserlayoutComponent,
    UserheaderComponent,
    UsersidebarComponent,
    UserfooterComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
