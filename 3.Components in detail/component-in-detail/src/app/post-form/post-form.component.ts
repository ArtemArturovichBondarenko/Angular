import { Post } from './../app.component';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() pushPost = new EventEmitter();

  @ViewChild('title') inputRef!: ElementRef;

  newPost: Post = {
    title: '',
    text: '',
  };

  ngOnInit(): void {}
  addPost() {
    let post = {};
    Object.assign(post, this.newPost);
    this.pushPost.emit(post);
    this.newPost.title = '';
    this.newPost.text = '';
  }

  focusTitle() {
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }
}
