import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Learn Angular component', text: "I'm lern Angular", id: 1 },
    { title: 'Next block', text: 'Derektivs and pipes', id: 2 },
  ];

  addPost(event: any) {
    if (event.title.trim() && event.text.trim()) {
      this.posts.unshift(event);
    }
  }
}
