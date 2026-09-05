import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DetailContent } from '../../models/content.models';

@Component({
  selector: 'app-detail-modal',
  imports: [CommonModule],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css'
})
export class DetailModalComponent {
  @Input() content: DetailContent | null = null;
  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.content) this.closed.emit();
  }

  close(): void {
    this.closed.emit();
  }
}
