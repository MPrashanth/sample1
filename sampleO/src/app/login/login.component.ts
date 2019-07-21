
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  private resdata;
  private token;
  private usee;
  private loginForm: FormGroup;
  
  constructor(public router: Router,  private http: HttpClient, private localStorageService: LocalStorageService ) { }
  login(){
    console.log("LoginForm Value", this.loginForm.value);
    this.http.post('http://localhost:6767/nani/myproject/users/login', this.loginForm.value).subscribe
    (success=>{
      console.log("Login Success",success);
      this.resdata = success;
      // console.log(this.resdata.token);
      
      if(this.resdata.success==true){
        var token= this.resdata.token; 
        console.log(token);
        console.log("token");
        console.log(this.loginForm.value.username);
        var usee=this.loginForm.value.username;
      this.localStorageService.set('token', token);
      this.localStorageService.set('username', usee);
        this.router.navigate(["dashboard"]);
      }else{
        alert("Please enter valid username");
      }
    },error=>{
      //console.log(error);
      alert("Invalid login");
    });
    // this.router.navigate(["dashboard"]);

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
  });

}
// onsubmit(loginForm: NgForm){
   
//   console.log(loginForm.value);
// }
}









 
