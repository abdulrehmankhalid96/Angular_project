import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sigin/login/login.component';
import { RegistrationComponent } from './sigup/registration/registration.component';
import { MypageComponent } from './intro/mypage/mypage.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { DummyComponent } from './dash/dummy/dummy.component';
import { FormComponent } from './dash/form/form.component';
import { CompleteTableComponent } from './dash/complete-table/complete-table.component';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:MypageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'full_table',component:CompleteTableComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'dummy',pathMatch:'full'},
    { path:'dummy',component:DummyComponent},
   {path:'registration',component:RegistrationComponent},
   {path:'from',component:FormComponent}
] }
   
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
