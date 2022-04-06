import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { LibrarianModel } from './librarian.model';
// import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.scss']
})
export class LibrarianComponent implements OnInit {
  title = 'library-management';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('english');
  }

  changeLocale(locale: string){
    this.translate.use(locale);
  }
    ngOnInit(): void {
        
    }
}

//   formValue !: FormGroup;
//   //creating object to parse this object to the server for posting our data
//   librarianModelObj : LibrarianModel = new LibrarianModel();
  
//   constructor(
//     private formbuilder: FormBuilder,
//     private readonly api: ApiService
//   ) { }

//   ngOnInit(){
//    this.formValue = this.formbuilder.group({
//      bookId: [''],
//      bookName: [''],
//      authorName: [''],
//      quantity: [''],
//      faculty: ['']
//    })
//   }

//   //Making use of obj "librarianModelObj" to post our data
//   postLibrarianDetails(){
//     this.librarianModelObj.bookId = this.formValue.value.bookId;
//     this.librarianModelObj.bookName = this.formValue.value.bookName;
//     this.librarianModelObj.authorName = this.formValue.value.authorName;
//     this.librarianModelObj.quantity = this.formValue.value.quantity;
//     this.librarianModelObj.faculty = this.formValue.value.faculty;

//     this.api.postLibrarian( this.librarianModelObj )
//     .subscribe( (res:any) =>{
//       console.log(res);
//       alert("Book Added Successfully")
//       this.formValue.reset();
//     },
//       (err:any) =>{
//       alert("Error Occured");
//     })
//   }

// }