import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpsService } from '../https.service';

@Component({
  selector: 'app-userone',
  templateUrl: './userone.component.html',
  styleUrls: ['./userone.component.css'],
  providers:[HttpsService]
})
export class UserOneComponent implements OnInit {
  hide = true;
  token:any;
  private UserOneForm: FormGroup;
  

  constructor(private https:HttpsService, private localStorageService: LocalStorageService) { }

  ngOnInit(){
    this.UserOneForm = new FormGroup({
      'id': new FormControl('',[Validators.required]),
      'status': new FormControl('',[Validators.required]),
    'username': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    'type': new FormControl('',[Validators.required]),
    'token': new FormControl('',[Validators.required]),
    'usee': new FormControl('',[Validators.required]),
});

this.viewusers();

}
userone(){
  console.log(this.UserOneForm.value);
  this.UserOneForm.value.usee=this.localStorageService.get('username');
  this.UserOneForm.value.token=this.localStorageService.get('token');
  this.https.userone(this.UserOneForm.value).subscribe
  (success=>{
    console.log(success);
    this.viewusers();
    
  },error=>{
    console.log(error);
    // alert("Invalid login");
  });
  // this.router.navigate(["dashboard"]);

} 

viewusers(){
  // view course data
this.https.viewallusers({username:this.localStorageService.get('username'),
token:this.localStorageService.get('token')}).subscribe(success=>{
  console.log(success);
  },error=>
  {console.log(error)});
}
}
