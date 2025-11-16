import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-fields',
  standalone: false,
  templateUrl: './blog-fields.component.html',
  styleUrl: './blog-fields.component.scss',
})
export class BlogFieldsComponent {
 @Input() blog: any = {};
}
