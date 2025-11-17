import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../../core/services/comment/comment.service';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})

export class BlogDetailComponent implements OnInit {
  blog: any;
  comments: any[] = [];
  newCommentText: string = '';
   isAuthenticatedUser: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService,
      private authService: AuthService
  ) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.loadBlog(blogId);
      this.loadComments(blogId);
    }
     this.isAuthenticatedUser = this.authService.isAuthenticated();
  }

  loadBlog(blogId: string) {
    this.blogService.getById(blogId).subscribe(res => {
      this.blog = res.value;
    });
  }

  loadComments(blogId: string) {
    this.commentService.getCommentsByBlogId(blogId).subscribe(res => {
      this.comments = res.value;
    });
  }

  addComment() {
    if (!this.newCommentText.trim()) return;
  if (!this.isAuthenticatedUser) return;
    this.commentService.createComment({
      blogId: this.blog._id,
      text: this.newCommentText
    }).subscribe(() => {
      this.loadComments(this.blog._id);
      this.newCommentText = '';
    });
  }

  handleReply(event: { parentId: string; text: string }) {
    const { parentId, text } = event;

    this.commentService.addReply(this.blog._id, parentId, text).subscribe({
      next: () => this.loadComments(this.blog._id),
      error: err => console.error(err)
    });
  }
}