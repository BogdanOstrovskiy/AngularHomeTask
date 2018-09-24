import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from '../app/pages/posts/posts.component';
import { OnePostComponent } from './pages/one-post/one-post.component';

@NgModule({
  declarations: [
    AppComponent, PostsComponent, OnePostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
