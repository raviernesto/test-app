import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, warn } from 'src/app/Store/store.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  constructor(private store: Store<{ count: number }>) {}

  count$ = this.store.select('count'); // read from store

}
