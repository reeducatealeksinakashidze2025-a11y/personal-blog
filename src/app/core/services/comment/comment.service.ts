import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
   private apiUrl = `${environment.apiUrl}/comment`;
  constructor(private http: HttpClient) {}

  getCommentsByBlogId(blogId: string) {
    return this.http.get<any>(`${this.apiUrl}/blog/${blogId}`);
  }

  createComment(data: { blogId: string, parentCommentId?: string, text: string }) {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
  addReply(blogId: string, parentId: string, text: string) {
  return this.http.post(`${this.apiUrl}`, {
    blogId,
    parentCommentId: parentId,
    text
  });
}
}
