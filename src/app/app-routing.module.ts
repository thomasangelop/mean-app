import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: PostListComponent }, // empty means main page
  { path: 'create', component: PostCreateComponent} // /create
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
