import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts') 
  }

  getCommentPosts(id) {

    this.comments = this.http.get(this.ROOT_URL + '/posts/' + id + 'comments/');
  }

  ngOnInit() {

    this.getPosts();
  }

}
