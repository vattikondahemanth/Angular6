import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdetails: object;
  constructor(private http: HttpClient, private myrouter: Router) { }

  getUserDetails(username: string, password: string) : any {
    return this.http.get("http://127.0.0.1:8000/SongsView")
                .pipe(map(data => data))

                
    // if (username === 'test' && password === 'test') {
    //   this.myrouter.navigate(['Home']);
    // } else {
    //   this.myrouter.navigate(['Login']);
    // }
     
  }
}
