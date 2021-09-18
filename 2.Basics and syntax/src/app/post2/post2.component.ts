import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css'],
})
export class Post2Component {
  value: number = 0;
  text: string = '';
  names: string = '';
  param: boolean = false;
  userName: string = 'Tom';
  userAge: number = 34;
  onInkrement(): void {
    this.value++;
  }
  onDekrement() {
    this.value--;
  }

  onInput($event: any): void {
    console.log($event.target.value.length);
    this.userName = $event.target.value;
    this.param = $event.target.value.length < 6;
  }
}
