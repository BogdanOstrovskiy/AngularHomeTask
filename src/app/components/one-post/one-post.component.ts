import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../../servises/http-requests.service';
import {ActivatedRoute} from '@angular/router';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  postData: any;
  comments: any[];

  constructor(private data: HttpRequestsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.getPostById(params.postId)
        .subscribe(postData => this.postData = postData, err => console.log(err));
      this.data.getPostCommentsById(params.postId)
        .subscribe((postComments: any[]) => {
          this.comments = postComments;
        }, err => console.log(err));
    });
  }

}