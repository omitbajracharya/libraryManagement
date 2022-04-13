import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AddBookInventoryComponent } from './librarian/add-book-inventory/add-book-inventory.component';
import { BookSearchComponent } from './librarian/book-search/book-search.component';
import { StudentPageComponent } from './librarian/student-page/student-page.component';
import { BorrowRequestComponent } from './librarian/borrow-request/borrow-request.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { DashpageComponent } from './dashpage/dashpage.component';

const routes: Routes = [
  {path: 'add-book-inventory', component: AddBookInventoryComponent},
  {path: 'book-search', component: BookSearchComponent},
  {path: 'student-page', component: StudentPageComponent},
  {path: 'borrow-request', component: BorrowRequestComponent},
  {path: '', component: DashpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}


  //redirect to Librarian component
  // {path: '', redirectTo: '/login', pathMatch: 'full'},

  // Setting up wildcard route for 404 page
  // {path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddBookInventoryComponent, BookSearchComponent, StudentPageComponent, BorrowRequestComponent]
