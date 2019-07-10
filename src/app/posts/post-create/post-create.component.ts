import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredContent = '';
  enteretedTitle = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteretedTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(post);
  }
}
