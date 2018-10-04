import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from '../app/components/posts/posts.component';
import { OnePostComponent } from './components/one-post/one-post.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

@NgModule({
  declarations: [
    AppComponent, 
    PostsComponent, 
    OnePostComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
