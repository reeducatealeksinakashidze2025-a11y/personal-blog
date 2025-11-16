import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    AboutComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    RegistrationComponent,
    NewsletterComponent
   
  ],
  imports: [
    CommonModule,
     FormsModule,
     RouterModule,
     SharedModule
  ]
})
export class PagesModule { }
