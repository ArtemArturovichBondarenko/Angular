import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'My title';

  textColor: string;

  ngOnInit() {}

  changeTitle() {
    this.title = 'Title has been change';
  }
  inputHandler(value) {
    this.title = value;
  }
}
