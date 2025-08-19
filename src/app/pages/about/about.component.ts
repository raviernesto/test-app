import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { decrement, increment, reset } from 'src/app/Store/store.actions';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  count$ = this.store.select('count');
  constructor(private store: Store<{ count: number }>, private messageService: MessageService) {}
  onDecrement() {
    this.count$.pipe(take(1)).subscribe((count) => {
      if (count <= 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: 'Value cannot be less than 0!',
          life: 3000
        });
      } else {
        this.store.dispatch(decrement());
      }
    });
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
