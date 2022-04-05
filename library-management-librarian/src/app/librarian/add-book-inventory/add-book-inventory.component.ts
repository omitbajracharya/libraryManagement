import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibrarianModel } from '../librarian.model';
import { ApiService } from 'src/app/shared/api.service';
import { Librarian } from '../model/librarian.interface';

@Component({
  selector: 'app-add-book-inventory',
  templateUrl: './add-book-inventory.component.html',
  styleUrls: ['./add-book-inventory.component.scss']
})
export class AddBookInventoryComponent implements OnInit {

  formValue !: FormGroup;
  //creating object to parse this object to the server for posting our data
  librarianModelObj: Librarian = new LibrarianModel();
  librarianData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.formValue = this.formbuilder.group({
      bookId: [''],
      bookName: [''],
      authorName: [''],
      quantity: [''],
      faculty: ['']
    })
    this.getAllBook();
  }

  clickAddBook() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  //Making use of obj "librarianModelObj" to post our data
  postLibrarianDetails() {
    this.librarianModelObj.bookName = this.formValue.value.bookName;
    this.librarianModelObj.authorName = this.formValue.value.authorName;
    this.librarianModelObj.quantity = this.formValue.value.quantity;
    this.librarianModelObj.faculty = this.formValue.value.faculty;

    this.api.postLibrarian(this.librarianModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Book Added Successfully")
        //to cancel the addbook form
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllBook();
      },
        (err: any) => {
          alert("Error Occured");
        })
  }

  //To show the data on the table
  getAllBook() {
    this.api.getLibrarian().subscribe(res => {
      this.librarianData = res;
      console.log(this.librarianData);
    })
    console.log("##########",this.librarianData,"#######");
  }

  //To delete the data on the table
  deleteBook(row: any) {
    this.api.deleteLibrarian(row.id).subscribe(res => {
      console.log(res);
      alert("Book Deleted");
      this.getAllBook();
    })
  }

  //To edit the book details on the table
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.librarianModelObj.bookId = row.id;
    this.formValue.controls['bookName'].setValue(row.bookName);
    this.formValue.controls['authorName'].setValue(row.authorName);
    this.formValue.controls['quantity'].setValue(row.quantity);
    this.formValue.controls['faculty'].setValue(row.faculty);
  }
  updateLibrarianDetails() {
    this.librarianModelObj.bookName = this.formValue.value.bookName;
    this.librarianModelObj.authorName = this.formValue.value.authorName;
    this.librarianModelObj.quantity = this.formValue.value.quantity;
    this.librarianModelObj.faculty = this.formValue.value.faculty;

    this.api.updateLibrarian(this.librarianModelObj, this.librarianModelObj.bookId)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllBook();
      })
  }


}