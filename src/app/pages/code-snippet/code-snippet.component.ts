import { Component, Input } from '@angular/core';
import { codeSnippet } from './code-snippet-data';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent {
  codeSnipperData = codeSnippet;
  @Input() code: string = `const string = 'AEIOU';
let reverse = string.split('').reverse().join('');
console.log(reverse);
let reversed = '';
for (let i = string.length - 1; i >= 0; i--) {
  reversed = reversed + string[i];
}
console.log(reversed)`;

  copied = false;

  copyCode(codeBlock: HTMLElement) {
    const text = codeBlock.textContent || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this.copied = true;
    setTimeout(() => this.copied = false, 1200);
  }
}
