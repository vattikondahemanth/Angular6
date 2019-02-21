import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialtext = 'This is initial text. This is the first text that will be seen';
  text = this.initialtext;
  constructor() {  }

  ngOnInit() {

  }
  dangerbuttonclick() {
    if (this.text === this.initialtext) {
      this.text = 'this text is changed';
    } else {
      this.text = this.initialtext;
    }
    alert('button clicked');
  }

}
