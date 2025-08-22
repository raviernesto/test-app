import { Component } from '@angular/core';
import { TRICKY_QUESTIONS, TrickyQuestion } from './tricky-questions-data';

@Component({
  selector: 'app-tricky-questions',
  templateUrl: './tricky-questions.component.html',
  styleUrls: ['./tricky-questions.component.css']
})
export class TrickyQuestionsComponent {
  questions: TrickyQuestion[] = TRICKY_QUESTIONS;
  showOutput: boolean[] = Array(TRICKY_QUESTIONS.length).fill(false);

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  toggleOutput(index: number) {
    this.showOutput[index] = !this.showOutput[index];
  }
}
