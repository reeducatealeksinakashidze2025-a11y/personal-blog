import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { Blog } from '../../../../shared/models/blog/blog.model';

@Component({
  selector: 'app-add-blog',
  standalone: false,
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent {
    blog: Blog = {
    title: '',
    coverImageUrl: '',
    contentHtml: '',
  };
 



  constructor(private blogService: BlogService, private router: Router) {}

  save() {
    this.blogService.create(this.blog).subscribe({
      next: (res) => {
                 this.router.navigate(['app/my-articles']); 
      },
      error: (err) => console.error(err)
    });
  }

}
