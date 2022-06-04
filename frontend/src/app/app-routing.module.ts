import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminbasicelementComponent } from './layout/adminlayout/adminbasicelement/adminbasicelement.component';
import { AdminbuttonComponent } from './layout/adminlayout/adminbasicelement/adminbutton/adminbutton.component';
import { AdmindropdownComponent } from './layout/adminlayout/adminbasicelement/admindropdown/admindropdown.component';
import { AdmintypographyComponent } from './layout/adminlayout/adminbasicelement/admintypography/admintypography.component';
import { AdminchartComponent } from './layout/adminlayout/adminchart/adminchart.component';
import { AdmindashboardComponent } from './layout/adminlayout/admindashboard/admindashboard.component';
import { AdminformelementComponent } from './layout/adminlayout/adminformelement/adminformelement.component';
import { AdminiconComponent } from './layout/adminlayout/adminicon/adminicon.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { AdmintableComponent } from './layout/adminlayout/admintable/admintable.component';
import { AdminaddbookComponent } from './layout/adminlayout/adminuserpage/adminaddbook/adminaddbook.component';
import { AdminbooklistComponent } from './layout/adminlayout/adminuserpage/adminbooklist/adminbooklist.component';
import { AdminregisterComponent } from './layout/adminlayout/adminuserpage/adminregister/adminregister.component';
import { AdminuserlistComponent } from './layout/adminlayout/adminuserpage/adminuserlist/adminuserlist.component';
import { AdminuserpageComponent } from './layout/adminlayout/adminuserpage/adminuserpage.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { UserdashboardComponent } from './layout/userlayout/userdashboard/userdashboard.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';

const routes: Routes = [
  {path:'',redirectTo:'layout/adminlayout/admindashboard',pathMatch:'full'},
  {path:'layout',component:LayoutComponent,
  children: [
              {path:'adminlayout',component:AdminlayoutComponent,
              children: [
                          {path:'admindashboard',component:AdmindashboardComponent},
                          {path:'adminbasicelement',component:AdminbasicelementComponent,
                          children: [
                                      {path:'adminbutton',component:AdminbuttonComponent},
                                      {path:'admindropdown',component:AdmindropdownComponent},
                                      {path:'admintypography',component:AdmintypographyComponent}
                                    ]
                          },
                          {path:'adminformelement',component:AdminformelementComponent},
                          {path:'admintable',component:AdmintableComponent},
                          {path:'adminchart',component:AdminchartComponent},
                          {path:'adminicon',component:AdminiconComponent},
                          {path:'adminuserpage',component:AdminuserpageComponent,
                          children: [
                                      {path:'adminaddbook',component:AdminaddbookComponent},
                                      {path:'adminbooklist',component:AdminbooklistComponent},
                                      {path:'adminuserlist',component:AdminuserlistComponent},
                                      {path:'adminregister',component:AdminregisterComponent},
                                    ]
                          },
                        ]
              },
              {path:'userlayout',component:UserlayoutComponent,
              children: [
                          {path:'userdashboard',component:UserdashboardComponent},
                        ]
              },
            ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
