import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-thread',
  standalone: false,
  templateUrl: './comment-thread.component.html',
  styleUrl: './comment-thread.component.scss',
})
export class CommentThreadComponent {
   @Input() comment: any;
  @Input() level = 0; // indentation level
  @Output() replyAdded = new EventEmitter<{ parentId: string; text: string }>();

  replyText: string = '';

  addReply() {
    if (!this.replyText.trim()) return;

    this.replyAdded.emit({
      parentId: this.comment._id,
      text: this.replyText
    });

    this.replyText = '';
  }

  onEnter() {
    this.addReply();
  }

}
