import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.css'],
})
export class Post3Component {
  constructor() {}

  @Input() names: string = '';
  @Input() ages: number = 0;
}
