
// import axios from "axios";
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';
import {StudentInterface} from './student-interface';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

 

@Component({
  selector: 'app-students',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})

export class StudentPageComponent implements OnInit {
  // stdDetail !: FormGroup;
  // public stds: Array<Record<string,number>>;
  // public list: Array<string> = ['A','B','C']; 
  // public listOfObj: Array<Record<string, any>> = [{ }];
  
  stds:Array<StudentInterface>=[];
  // IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem:any;   
  previousDataStd:{id:number,name:string,phone:number,semester:number}={id:0,name:'just_initialize_randomly',phone:0,semester:8};
  public stdDetail:FormGroup=new FormGroup({
    id:new FormControl(null,Validators.required),
    name:new FormControl(null),
    phone:new FormControl(null),
    semester:new FormControl(null)
  });

  // constructor(private formBuilder : FormBuilder) { }
constructor( private readonly http: HttpClient){}
   ngOnInit(): void {
    
    // fetch('http://localhost:3000/Students').then(res=>{
    //   return res.json()
    //   console.log(res.json()); 
    // }).then(data=>
    // this.stds= data
    // )
    // put,post,delete;

    console.log(localStorage.getItem("studentArray"))
    const tokenFromLocalStorage = localStorage.getItem("studentArray"); 
    if(tokenFromLocalStorage)
    {
      this.stds=JSON.parse(tokenFromLocalStorage);
    }
    else{
    // listobj:Array<Record<string,any>>=[];
      // const lng: string = 'en';
      // this.stds.length=0;
      // <Array<Record<string, any>>>

      this.http.get <Array<{id:number,name:string,phone:number,semester:number}>>(`../assets/data/student.json`).subscribe((student) => {
        // this.http.get <Array<{id:number,name:string,phone:number,semester:number}>>(`../student.json`).subscribe((student) => {
        localStorage.setItem("studentArray",JSON.stringify(student)); 
        this.stds=student;
        
        //ES6=> Array1.splice(0, Array1.length, ...Array2);  ==>clear all data & replace with new array
        
        // console.log(student,typeof(student));
        // .name
        //splice   
        //destructuring
      });
    }
  
    // this.stds=localStorage.getItem("token");
    
    // let x = [localStorage.getItem("token")];
    // for (let i = 0; i < x.length; i++) {
    //     console.log(JSON.parse(x[i]),typeof(x[i]));
    // }
   // console.log("x",x,typeof(x));

    // this.stdDetail = this.formBuilder.group({
    //   id:[''],
    //   name:[''],
    //   phone:[''],
    //   semester:[""]
    // })
  }

  records:any={};

  regisStd(){
    this.stds.push(this.stdDetail.getRawValue());

    console.log(this.stdDetail.getRawValue());

    // this.records=Object.assign(this.stds);
    localStorage.setItem("studentArray",JSON.stringify(this.stds));
    // this.http.post(`../assets/data/student.json`,{}).subscribe((student) => {
    // }
     
    // this.stds.map(val => {
    //     return localStorage.setItem('myData', JSON.stringify(val));      //Returning Value
    //   });
    // this.stds.subscribe((data) => {
    //   localStorage.setItem('myData', JSON.stringify(data);
    //   });

    // console.log(this.stdDetail.value.id);
    // console.log("submitted",this.stdDetail.getRawValue().id);
  };
 
  //just to store default value & setting updated item index
  setPreviousValueStudent(i:number) {  
    // this.stds.controls["{'id','name','phone','semester'}"].setValue("this.stds[i].getRawValue()");  
    this.previousDataStd = this.stds[i];  //just to display previous value
    this.stdDetail.setValue(this.stds[i]);  //just save previous value that is changed down according to edit
    // this.edit_std = {id:1,name:'ram',phone:9860486474,semester:8};  
    // console.log(this.edit_std.semester);
    this.updatedItem = i;  
    // this.IsForUpdate = true;  
  }
  
//  To update specific std detail
  UpdateStd() 
  {  
    // this..setValue('Nancy');
    
    let data = this.updatedItem;  
    this.stds[data] = this.stdDetail.getRawValue();
    localStorage.setItem("studentArray",JSON.stringify(this.stds));
    

    // console.log(this.stds[data]);

    // console.log(this.stds);  
    // this.IsForUpdate = false;  
    // this.newItem = {};  
  }  

  // To delete specific std detail  
  DeleteStd(i:number) {  
    this.stds.splice(i, 1);  
    localStorage.setItem("studentArray",JSON.stringify(this.stds));
  }  
  
}



