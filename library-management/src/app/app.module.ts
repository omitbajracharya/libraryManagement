import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibrarianComponent} from './librarian/librarian.component'; 
import { AddBookInventoryComponent } from './librarian/add-book-inventory/add-book-inventory.component';
import { BorrowRequestComponent } from './librarian/borrow-request/borrow-request.component';
import { StudentPageComponent } from './librarian/student-page/student-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { BookSearchComponent } from './librarian/book-search/book-search.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashpageComponent } from './dashpage/dashpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

// for Internationalization
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent, 
    LibrarianComponent,
    AddBookInventoryComponent,
    BookSearchComponent,
    BorrowRequestComponent,
    StudentPageComponent,
    DashpageComponent,
    SignupComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
