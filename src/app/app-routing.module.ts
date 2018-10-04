import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { OnePostComponent } from './components/one-post/one-post.component';
 
const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent,
        data: {
            breadcrumb: 'post-list'
        }
    },
    {
        path: 'post/:postId',
        component: OnePostComponent,
        data: {
            breadcrumb: 'post'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }