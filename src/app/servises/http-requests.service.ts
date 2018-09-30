import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: HttpClient) {  }

  getPostList() {
    return this.http.get(`${environment.apiUrl}/posts`).pipe(take(1));
  }

  getPostById(id: number | string) {
    return this.http.get(`${environment.apiUrl}/posts/${id}`).pipe(take(1));
  }

  getPostCommentsById(id: number | string) {
    return this.http.get(`${environment.apiUrl}/posts/${id}/comments`).pipe(take(1));
  }
}
