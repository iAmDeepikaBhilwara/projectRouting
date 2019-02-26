import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Logout",
    component:LogoutComponent
  },
  {
    path:"HomePage",
    component:HomePageComponent
  },
  {
    path:"Dashboard",
    component:DashboardComponent
  },
  {
    path:"", 
    redirectTo:"/Login", 
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
