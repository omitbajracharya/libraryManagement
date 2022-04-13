import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Librarian} from '../librarian/model/librarian.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  public postLibrarian(data : Librarian){
    return this.http.post<any>("http://localhost:3000/posts", data);
  }
  public getLibrarian(){
    return this.http.get<any>("http://localhost:3000/posts");
  }
  public updateLibrarian(data :Librarian, id: number){
    return this.http.put<any>(`http://localhost:3000/posts/${id}`, data);
  }
  public deleteLibrarian(id : number){
    return this.http.delete<any>(`http://localhost:3000/posts/${id}`);  //Template literals
  }

}
