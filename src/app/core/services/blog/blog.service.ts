import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../../shared/models/blog/blog.model';
import { environment } from '../../../../environments/environment';
import { ResponseBase } from '../../../shared/models/base/response-base.model';
import { AuthService } from '../auth/auth.service';
import { PagedResult } from '../../../shared/models/base/paged-result.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
   private apiUrl = `${environment.apiUrl}/blog`;

  constructor(private http: HttpClient,
          private authService: AuthService
    
  ) {}


// getAll(userOnly: boolean = false, search: string = ''): Observable<ResponseBase<Blog[]>> {
//   const params: any = {};
//   if (search) params.search = search;

//   // აირჩევე route
//   const url = userOnly ? `${this.apiUrl}/my` : this.apiUrl;

//   // თუ userOnly, აუცილებლად ავამოწმოთ authorization
//   const headers = userOnly && this.authService.isAuthenticated()
//     ? new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`)
//     : undefined;

//   return this.http.get<ResponseBase<Blog[]>>(url, { params, headers });
// }
getAll(
  page: number = 1,
  pageSize: number = 5,
  search: string = '',
  userOnly: boolean = false
): Observable<ResponseBase<PagedResult<Blog[]>>> {

  const params: any = {
    page,
    pageSize
  };

  if (search && search.trim().length > 0) {
    params.search = search;
  }

  const url = userOnly ? `${this.apiUrl}/my` : this.apiUrl;

  const headers =
    userOnly && this.authService.isAuthenticated()
      ? new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.authService.getToken()}`
        )
      : undefined;

  return this.http.get<ResponseBase<PagedResult<Blog[]>>>(url, { params, headers });
}


  getById(id: string | null): Observable<ResponseBase<Blog>> {
    return this.http.get<ResponseBase<Blog>>(`${this.apiUrl}/${id}`);
  }

  create(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog);
  }

  update(id: string | null, blog: Blog): Observable<Blog> {
    return this.http.patch<Blog>(`${this.apiUrl}/${id}`, blog);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
