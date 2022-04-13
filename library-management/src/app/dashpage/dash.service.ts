import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  
  constructor() { }
  
  adminSelected=new BehaviorSubject(false);
  studentSelected=new BehaviorSubject(false);
  librarySelected=new BehaviorSubject(false);
}
