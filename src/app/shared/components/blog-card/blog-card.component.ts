import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../models/blog/blog.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-blog-card',
  standalone: false,
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent implements OnInit  {
  @Input() blog!: Blog;
   isAuthenticatedUser: boolean = false;


  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
          private authService: AuthService
    
  ) { }
ngOnInit() {
   
     this.isAuthenticatedUser = this.authService.isAuthenticated();
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
   goToDetail(blogId: string) {
    
    const prefix = this.isAuthenticatedUser ? 'app/blog' : '/blog';
    this.router.navigate([prefix, blogId]);
  }
 
}
