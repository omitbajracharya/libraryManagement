import { Component, OnInit } from '@angular/core';
import { Librarian } from '../model/librarian.interface';
import { ApiService } from 'src/app/shared/api.service';
import { NgForm } from '@angular/forms';
import { StudentInterface } from '../student-page/student-interface';


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  librarianData !: any;
  borrowListFromLocalStorage !: any;
  borrowList:Array<[]>=[];
  StdBookBorrow:any=[];
  clicked:boolean=false;
  stds: Array<StudentInterface> = [];
  loginStudent: string ='name1';
  BookSearchText: string = '';
  bookPresent: boolean = false;
  listOfParticularBook: Array<{ id: number, bookName: string, authorName: string, quantity: number, faculty: string }> = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
   
    const tokenFromLocalStorage = localStorage.getItem("studentArray");
    if (tokenFromLocalStorage) {
      this.stds = JSON.parse(tokenFromLocalStorage);
      this.loginStudent=this.stds[0].name;
    }

  }

  searching(val: string) {
    this.listOfParticularBook=[];
    this.BookSearchText = val;

    
    // console.log(this.BookSearchText);
    
    
    
    //***********get Data of Books From Json Server***************** */
    this.api.getLibrarian().subscribe(res => {
      this.librarianData = res;

      var result = this.librarianData.map((a: any) => a.bookName);//just return list of book
      // var justForListOfParticularBookName=this.listOfParticularBook.map((a: any) => a.bookName);

      // console.log(result);    [cp,jh,s]
      // if(BookSearchText )
      // for (var i = 0; i < result.length; i++) {
      //   if (this.BookSearchText == result[i]) {
      //     this.bookPresent = true;
      //     console.log(this.BookSearchText);
      //     this.listOfParticularBook.push(this.librarianData[i]);
      //     break;
      //   }
      // }
      var i=result.indexOf(this.BookSearchText);
      
      // if(justForListOfParticularBookName.indexOf(this.BookSearchText)!==-1)//If same book is present in list not insert
      // {
      //   alert("Book ")  
      // }
      

      
     
      if(i !== -1)  //particular data not in list of books available
      {
        this.bookPresent = true;
        this.listOfParticularBook.push(this.librarianData[i]);
      }
      else
      {
        this.clicked=true;
        this.bookPresent = false;
      }
     
    })
  }



  //--------------------just selecting particular student to select books---------------
  selectStudent(std: string) {
    // if(std=='')
    // {this.loginStudent=this.stds[0].name;}
    // else
    // {
      this.loginStudent = std;
    // }
    console.log(this.loginStudent);
  }


  //borrowBorrow---->comes after searching Books for particular student-->you can add if the particular book is available...
  borrowBook(indexOfBorrow:number){
    let flag=1;
    // ######################################### Local Storage ###############
      //obtain data from localstorage so as to check same book or not by particular student
      const tokenFromLocalStorage = localStorage.getItem("Borrow");
      if (tokenFromLocalStorage) {
   
        this.borrowListFromLocalStorage = JSON.parse(tokenFromLocalStorage);
   
        //**************  Maximum 3 Books Per student ************************ */
        var std=this.borrowListFromLocalStorage.map((a: any) => a[0]);
        // let book=this.borrowListFromLocalStorage.map((a: any) => a[1]);
        var count=0;
        for(var i=0;i<std.length;i++)
        {
          if(std[i]==this.loginStudent)
          {
            count+=1;
          }
          if(count>=3)
          {
            console.log("entered here..");
            flag=0;
            alert("Only 3 Books..You have to return atleast one book to issue this..!!!");
            break;
          }
         
        }

          //###############  BOOKS ALREADY WITH YOU CANNOT ISSUE same book-> by same student ################################################
          if(flag==1)
          {
              for(var i=0;i<this.borrowListFromLocalStorage.length;i++)
              {
                if((this.borrowListFromLocalStorage[i][1]==this.listOfParticularBook[0].bookName) && (this.borrowListFromLocalStorage[i][0]==this.loginStudent))
                {
                  alert("This Book is already with you!!!");
                  flag = 0;
                  break;
                }
              }
          }
   
      }  

    // ######################################################################
    if (flag==1)    //it will restrict to store in local storage:=> same student cannot issue same book & also only max 3 books can only be issued by particular student...
    {
      alert("Book is issued..!!!");
      this.StdBookBorrow=[this.loginStudent,this.listOfParticularBook[0].bookName]
      this.borrowList.push(this.StdBookBorrow);
      // console.log(this.StdBookBorrow);
      //###########  Save Borrow =[student,BookName] to local storage ###########     
      localStorage.setItem("Borrow",JSON.stringify(this.borrowList));
    } 
  }


}//export
