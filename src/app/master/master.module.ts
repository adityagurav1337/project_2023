import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MasterRoutingModule } from './master-routing.module';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LandingComponent,
    UsersComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
    
  ]
})
export class MasterModule { }
