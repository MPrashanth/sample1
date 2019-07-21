import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {ErrorStateMatcher} from '@angular/material/core';

import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserOneComponent } from './userone/userone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTwoComponent } from './usertwo/usertwo.component';
import { LocalStorageModule } from 'angular-2-local-storage';


const observableRouting: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,
  children:[
    {path:'users', component:UsersComponent,
  children:[
  {path:'userone', component: UserOneComponent},
  {path:'usertwo', component: UserTwoComponent}
]},
]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserOneComponent,
    DashboardComponent,
    UserTwoComponent
  ],
  imports: [
    BrowserModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule, MatCheckboxModule, MatIconModule, ReactiveFormsModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot(observableRouting), MatListModule, MatDatepickerModule,  
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
