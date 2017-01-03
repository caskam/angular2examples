import { Component } from '@angular/core';
import { Post } from '../../model/Post'

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>Add Post</h1>
    <form #f="ngForm">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" [(ngModel)]="model.title" name="title" required>
        <div [hidden]="!f.controls.title?.errors" class="alert alert-danger">Title is required</div>
      </div>
      <div class="form-group">
        <label>Category</label>
        <select class="form-control" [(ngModel)]="model.category" name="category" required>
        <option *ngFor="let cat of categories, let i = index">{{cat}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Body</label>
        <textarea class="form-control" [(ngModel)]="model.body" name="body"></textarea>
      </div>
      <div class="form-group">
        <label>Author</label>
          <input typw="text" class="form-control" [(ngModel)]="model.author" name="author">
      </div>
      <button [disabled]="f.invalid" type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>
  `,
  styles: [`
    .ng-valid[required]{
      border: 1px solid #42A948; /* green */
    }
    .ng-invalid{
      border: 1px solid #a94442; /* red */
    }
  `]
})
export class AppComponent  {
  categories: string[];
  model: Post;
  submitted: boolean;
  constructor(){
    this.categories = ['Technology', 'Business', 'Entertainment'];
    this.model = new Post(1, 'Post One', this.categories[0], 'This is the body', 'Puneet Sachdev');
    this.submitted = false;
  }
}
