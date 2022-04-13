import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DashService } from './dash.service';

@Component({
  selector: 'app-dashpage',
  templateUrl: './dashpage.component.html',
  styleUrls: ['./dashpage.component.scss']
})
export class DashpageComponent implements OnInit {
  adminSelected:boolean=false;
  librarySelected:boolean=false;
  studentSelected:boolean=false;
  
  constructor(private router:Router,private _dashservice:DashService) { 
    this._dashservice.adminSelected.subscribe(res=>this.adminSelected=res);
    this._dashservice.librarySelected.subscribe(res=>this.librarySelected=res);
    this._dashservice.studentSelected.subscribe(res=>this.studentSelected=res);
  }

  ngOnInit(): void {
  }
  
  login(role:string)
  {
    this._dashservice.adminSelected.next(false);
    this._dashservice.studentSelected.next(false);
    this._dashservice.librarySelected.next(false);
    // this.adminSelected=false;
    // this.studentSelected=false;
    // this.librarySelected=false;
    if(role==='admin')  
    { 
      this._dashservice.adminSelected.next(true);
      // this.adminSelected=true;
    }  
      else if(role==='student')
    {
      this._dashservice.studentSelected.next(true);
      // this.studentSelected=true;
    }
      else
    {
      this._dashservice.librarySelected.next(true);
      // this.librarySelected=true;
    }    
    this.router.navigate(['/login'],{queryParams:{roles:role}});
  }

}
