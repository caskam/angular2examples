import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Posts</h1>
    <posts></posts>
  `,
})
export class AppComponent  {
}
