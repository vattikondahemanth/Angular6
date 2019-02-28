import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService  { 
  private messageSource = new BehaviorSubject("defalut messge");
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) {
    
  }
  changeMessage(message: string) {
       this.messageSource.next(message);
   }

   }




