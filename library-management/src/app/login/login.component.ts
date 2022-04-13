import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { DashService } from '../dashpage/dash.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
 
export class LoginComponent implements OnInit {
  adminSelected!:boolean;
  librarySelected!:boolean;
  studentSelected!:boolean;
  role:any;
  public loginDetail:FormGroup=new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
  });

  constructor(private route:ActivatedRoute,private _dashservice:DashService) { 
    this._dashservice.adminSelected.subscribe(res=>this.adminSelected=res);
    this._dashservice.librarySelected.subscribe(res=>this.librarySelected=res);
    this._dashservice.studentSelected.subscribe(res=>this.studentSelected=res);
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((Params:any)=>{
      console.log(Params);
      this.role = Params.roles;
      
      if(this.role===undefined)
      {
        // this.role="admin";
        if(this.adminSelected)
          this.role="admin";
        else if(this.librarySelected)
          this.role="librarian";
        else
          this.role="student";   
      }
    });
    
  }
  
}
