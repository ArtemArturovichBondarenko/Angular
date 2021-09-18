import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component..css'],
})
export class PostComponent {
  // name: string = '';
  //============================================
  // 2 way binding
  // title: any = 'sdzvfxb';
  //===============================================================
  // Директива ngStyle
  // backgroundToggle = false;
  // ===============================================================
  // Отображение по условию
  // toggle = false;
  //=============================================================
  // Pipes
  date: Date = new Date();
  constructor() {}

  // onInputs(event: any) {
  //   console.log(event);
  //   this.name = event.target.value;
  // }
  // onClick() {
  //   console.log('hi');
  // }
  // 2 way binding
  // onInput(event: any) {
  //   this.title = event.target.value;
  // }
  //==================================================
}
