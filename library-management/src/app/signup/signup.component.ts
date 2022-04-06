import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupRecords:Array<{name:string,role:string,email:string,password:string,confirmPassword:string}>=[];
  signupNowRecord!:{name:string,role:string,email:string,password:string,confirmPassword:string};
  matchPassword:string="";
  passwordIncorrect:boolean=false
   public signupDetail:FormGroup=new FormGroup({
    name:new FormControl(null),
    role:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null),
    confirmPassword:new FormControl(null)
  });
  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
  }

  signupUser(){
    this.signupNowRecord=this.signupDetail.getRawValue();
    
    if(this.signupNowRecord.password==this.signupNowRecord.confirmPassword)
    {
      const signupRecordsFromLocalStorage = localStorage.getItem("signUpArray"); 
      
      if(signupRecordsFromLocalStorage)
      {
        this.signupRecords=JSON.parse(signupRecordsFromLocalStorage);
      }
      this.signupRecords.push(this.signupDetail.getRawValue());

    
      localStorage.setItem("signUpArray",JSON.stringify(this.signupRecords)); 
      // local/jsonserver
      // console.log(this.signupRecord);
      // this.matchPassword="";
      
    }
    else{
      this.passwordIncorrect=true
      this.matchPassword="Password and confirm password doesnot match..."
    }
    // console.log(this.signupRecord.name)
  }
}
