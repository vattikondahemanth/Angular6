import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css']
})
export class CustomErrorComponent implements OnInit {
  initialtext = 'This is initial text. This is the first text that will be seen';
  constructor() { }

  ngOnInit() {
  }

}
