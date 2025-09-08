import { Component } from '@angular/core';
import { concepts } from './angular-concept-data';

@Component({
  selector: 'app-angular-concept',
  templateUrl: './angular-concept.component.html',
  styleUrls: ['./angular-concept.component.css'],
})
export class AngularConceptComponent {
  codeSnipperData = concepts;
  copied = false;
  // Track which snippet indexes are expanded
  private openIndexes = new Set<number>();

  isOpen(index: number): boolean {
    return this.openIndexes.has(index);
  }

  toggle(index: number): void {
    if (this.openIndexes.has(index)) {
      this.openIndexes.delete(index);
    } else {
      this.openIndexes.add(index);
    }
  }

  copyCode(text: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this.copied = true;
    setTimeout(() => (this.copied = false), 1200);
  }
}
