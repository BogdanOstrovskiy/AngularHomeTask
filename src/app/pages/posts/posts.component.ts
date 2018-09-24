import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  
  posts: Observable<any>;
  comments: Observable<any>;
  
  constructor(private http: HttpClient) { };
  
  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts') 
  }
  
  getCommentPosts(id) {
    
    const params = new HttpParams().set('userId', id);

    this.comments = this.http.get<Config>(this.ROOT_URL + '/posts', { params });
    console.log(`${comments.id}`);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.ROOT_URL, { observe: 'response' });
  }

  ngOnInit() {

    this.getPosts();

    
  }

}

export interface Config {
  heroespostId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
