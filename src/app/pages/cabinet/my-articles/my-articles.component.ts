import { Component } from '@angular/core';
import { Blog } from '../../../shared/models/blog/blog.model';
import { BlogService } from '../../../core/services/blog/blog.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-my-articles',
  standalone: false,
  templateUrl: './my-articles.component.html',
  styleUrl: './my-articles.component.scss',
})
export class MyArticlesComponent {
  blogs: Blog[] = [];
  
  constructor(private blogService: BlogService, private router: Router) {}


ngOnInit() {
  this.blogService.getAll(1,10,'',true).subscribe({
    next: (data) => {
      this.blogs = data.value?.items || [];
    },
    error: (err) => {
      console.error('Error loading blogs:', err);
    }
  });
  }

  edit(id: string) {
    this.router.navigate(['app/blog/edit', id]);
  }
  add() { 
   this.router.navigate(['app/blog/add']);
  }

  delete(id: string) {
  if (confirm('Delete this blog?')) {
    this.blogService.delete(id).subscribe({
      next: () => {
        this.blogService.getAll().subscribe({
          next: (data) => {
            this.blogs = data.value?.items || [];
          },
          error: (err) => {
            console.error('Error loading blogs:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error deleting blog:', err);
      }
    });
  }
}
}
