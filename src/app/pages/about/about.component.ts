import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounce, debounceTime, distinctUntilChanged, take } from 'rxjs';
import { decrement, increment, reset } from 'src/app/Store/store.actions';
import { MessageService } from 'primeng/api';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  @ViewChild('inputElement', { static: true }) nameInput!: ElementRef<HTMLInputElement>;
  // ...existing code...

  ngAfterViewInit() {
    // Ensure view is settled before focusing
    setTimeout(() => this.nameInput?.nativeElement.focus(), 0);
  }
  matcher = new MyErrorStateMatcher();
  count$ = this.store.select('count');
  searchText: any;
  list: string[] = ['Angular', 'React', 'Java'];
  constructor(
    private store: Store<{ count: number }>,
    private messageService: MessageService
  ) {
    this.emailFormControl.valueChanges.pipe(debounceTime(500),
    ).subscribe((value) => {
      alert(value);
    });
  }
  onDecrement() {
    this.count$.pipe(take(1)).subscribe((count) => {
      if (count <= 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: 'Value cannot be less than 0!',
          life: 3000,
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
