import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth-guard';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { LayoutComponent } from './pages/cabinet/shared/layout/layout.component';
import { DashboardComponent } from './pages/cabinet/dashboard/dashboard.component';
import { MyArticlesComponent } from './pages/cabinet/my-articles/my-articles.component';
import { ProfileComponent } from './pages/cabinet/profile/profile.component';
import { AddBlogComponent } from './pages/cabinet/blog/add-blog/add-blog.component';
import { EditBlogComponent } from './pages/cabinet/blog/edit-blog/edit-blog.component';
import { BlogDetailComponent } from './pages/cabinet/blog/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
   {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: "full"},
      { path: 'blogs', component: BlogComponent },
      { path: 'about', component: AboutComponent },
      { path: 'newsletter', component: NewsletterComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ],
  },
   {
    path: 'cabinet',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/cabinet/cabinet-module').then(m => m.CabinetModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
