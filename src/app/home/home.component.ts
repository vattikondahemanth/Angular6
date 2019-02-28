import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialtext = 'This is initial text. This is the first text that will be seen';
  text = this.initialtext;
  message: string;
  constructor(private data: DataServiceService) {  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
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
