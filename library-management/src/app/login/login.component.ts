import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  role:any;
  public loginDetail:FormGroup=new FormGroup({
    name:new FormControl(null),
    password:new FormControl(null)
  });
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((Params:any)=>{
      console.log(Params)
      this.role = Params.roles
    });
    
  }
  
}
