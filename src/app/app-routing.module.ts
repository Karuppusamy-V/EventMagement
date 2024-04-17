import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventrequirementsComponent } from './eventrequirements/eventrequirements.component';



const routes: Routes = [
  // {path : "", component : LoginComponent},
  // {path : "login", component : LoginComponent},
  {path : "home", component : HomeComponent},
  {path: "", component : EventrequirementsComponent},
  {path: "register" , component : RegisterComponent},
  {path: "eventrequirements", component : EventrequirementsComponent},
  {path : "sidebar", component : SidebarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
