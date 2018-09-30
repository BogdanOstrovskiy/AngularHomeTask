import { Component,OnDestroy, OnInit } from '@angular/core';
import { HttpRequestsService } from '../../servises/http-requests.service';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit, OnDestroy {

  posts: any[];
  commentsAlive = new Subject();
  
  constructor(private data: HttpRequestsService) { };
  
  ngOnInit() {

    this.data.getPostList()
      .pipe(takeUntil(this.commentsAlive))
      .subscribe(
        (data: any[]) => {
          this.posts = data;
          this.posts.forEach((post, index) => {
            this.data.getPostCommentsById(post.id)
              .subscribe((data: any[]) => this.posts[index].commentCount = data.length);
          })
        },
        err => {
          console.log(err);
          this.posts = [];
        }
      )
  }

  ngOnDestroy() {
    this.commentsAlive.next();
  }

}
