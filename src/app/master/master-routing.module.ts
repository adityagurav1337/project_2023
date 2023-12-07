import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:"", component: LandingComponent, children:[
  {path:"header", component:HeaderComponent},
  {path:"landing", component:LandingComponent},
  {path:"users", component:UsersComponent},
  {path:"home", component:HomeComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
