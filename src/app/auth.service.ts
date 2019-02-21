import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private myrouter: Router) { }

  getUserDetails(username: string, password: string) {
    // post these details to HTTP server return user info if correct
    // return this.http.post('api/auth', {

    // }).subscribe( data => {
    //   console.log(data, 'Details of user are successfully retrieved from api');
    //   this.router.navigate(['Home']);
    // });
    if (username === 'test' && password === 'test') {
      this.myrouter.navigate(['Home']);
    } else {
      this.myrouter.navigate(['Login']);
    }
  }
}
