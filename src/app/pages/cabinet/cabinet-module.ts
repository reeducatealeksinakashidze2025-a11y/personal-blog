import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabinetRoutingModule } from './cabinet-routing-module';
import { ProfileComponent } from './profile/profile.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core-module';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared-module';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    MyArticlesComponent,
    LayoutComponent,
    AddBlogComponent,
    EditBlogComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    TranslateModule,
    CoreModule,
    QuillModule.forRoot() ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CabinetModule { }
