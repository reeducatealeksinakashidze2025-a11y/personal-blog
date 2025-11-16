import { Component } from '@angular/core';
import { Blog } from '../../../../shared/models/blog/blog.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../../core/services/blog/blog.service';

@Component({
  selector: 'app-edit-blog',
  standalone: false,
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss',
})
export class EditBlogComponent {
  blog!: Blog;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogService.getById(this.id).subscribe({
      next: (found) => {
        if (found) this.blog = { ...found.value! };
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    this.blogService.update(this.id, this.blog).subscribe({
      next: (res) => {
         this.router.navigate(['app/my-articles']); 
     },
      error: (err) => console.error(err)
    });

  }
}
