import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';



const appRoutes:Routes = [
{ path: 'home/details', component: HomeComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
  
  ]
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LayoutRoutingModule { }
