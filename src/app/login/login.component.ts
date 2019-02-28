import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdetails: any;
  message: string;
  artist: string;
  song_title: string;
  genre: string;
  song_logo: string;
  constructor(private Auth: AuthService, private data: DataServiceService, private myrouter: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  loginUser(event: any) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    
    this.Auth.getUserDetails(username, password).subscribe(data => {
      console.log(data);
      this.artist = data[0].artist;
      this.song_title = data[0].song_title;
      this.genre = data[0].genre;
      this.song_logo = data[0].song_logo;
      this.data.changeMessage(this.song_title);
      this.myrouter.navigate(['Home']);
      console.log("loggin");
    
    });
  }
  }

