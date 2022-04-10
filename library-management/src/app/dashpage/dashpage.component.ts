import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashpage',
  templateUrl: './dashpage.component.html',
  styleUrls: ['./dashpage.component.scss']
})
export class DashpageComponent implements OnInit {
  adminSelected:boolean=false;
  librarySelected:boolean=false;
  studentSelected:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(role:string)
  {
    this.adminSelected=false;
    this.studentSelected=false;
    this.librarySelected=false;
    if(role==='admin')  
      this.adminSelected=true;
    else if(role==='student')
      this.studentSelected=true;
    else
     this.librarySelected=true;
        
    this.router.navigate(['/login'],{queryParams:{roles:role}});
  }

}
