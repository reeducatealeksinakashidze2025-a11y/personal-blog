import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogFieldsComponent } from './components/blog-fields/blog-fields.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CommentThreadComponent } from './components/comment-thread/comment-thread.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    BlogCardComponent,
    BlogFieldsComponent,
    CommentThreadComponent,
    LoadingSpinnerComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
      QuillModule,
      RouterModule 
  ],
  exports: [
    BlogCardComponent,
    BlogFieldsComponent,
    CommentThreadComponent,
LoadingSpinnerComponent,
    PaginationComponent

  ]
})
export class SharedModule { }
