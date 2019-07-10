import {Component, Input } from '@angular/core';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts = [];
  // posts = [
  //   {tite: 'Fist Post', content: 'This is the first post content'},
  //   {tite: 'Second Post', content: 'This is the first post content'},
  //   {tite: 'Third Post', content: 'This is the first post content'},
  // ];
}
