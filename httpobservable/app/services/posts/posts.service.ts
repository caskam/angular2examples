import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../../model/Post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';
  response: any;
  constructor(private _http: Http){

  }

  getPosts(): Observable<Post[]>{
    return this._http.get(this.postsUrl)
      .map(res => res.json());
  }

}
