import {
  Component,
  OnInit,
  DoCheck
 } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../../services/posts/posts.service';
import { Post } from '../../model/Post';

@Component({
  selector: 'posts',
  template: `
    <div *ngIf="isLoading">
    <i class="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
    </div>
    <div *ngIf="!isLoading">
      <div *ngFor="let post of posts, let i = index">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr/>
      </div>
    </div>
    <!--button class="btn btn-default" (click)="clickMe()">Click</button-->
  `,
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit, DoCheck {
    posts: Post[];
    isLoading: boolean = true;
    constructor(private _postsService: PostsService){
    }

    ngOnInit(){
      this._postsService.getPosts()
        .subscribe(posts => {
          console.log(posts);
          this.posts = posts;
          this.isLoading = false;
        });
    }

    ngDoCheck(){
      console.log('Do Check has Run');
    }

    clickMe(){
      console.log("Button clicked");
    }
}
