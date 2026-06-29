import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-modal',
  imports: [],
  templateUrl: './feedback-modal.html',
  styleUrl: './feedback-modal.scss',
})
export class FeedbackModal {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() message = '';
  @Input() type: 'success' | 'error' = 'success';

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
