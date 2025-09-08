export let concepts = [
  {
    title: 'Custom Pipe in Angular',
    description: `Custom pipes in Angular are user-defined pipes that transform data inside templates. 
    Angular provides built-in pipes like date, uppercase, and async. But when we need custom logic 
    (e.g., filtering a list), we create our own pipe. Pipes are reusable and keep templates clean, 
    so logic doesn’t clutter HTML.`,
    code: `
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[] | null, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(v => v.toLowerCase().includes(searchText));
  }
}

// Usage:
// <input [(ngModel)]="searchText" placeholder="Search..." />
// <li *ngFor="let item of items | filter:searchText">{{ item }}</li>
    `,
  },

  {
    title: 'Debounce Search with API',
    description: `Debouncing is used to avoid sending API requests on every keystroke. 
    It waits until the user stops typing for a certain period (e.g., 500ms). 
    This improves performance and reduces unnecessary server calls. 
    Angular uses RxJS operators like debounceTime, distinctUntilChanged, and switchMap.`,
    code: `
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  template: \`
    <input [formControl]="searchControl" placeholder="Search users..." />
  \`
})
export class DebounceSearchComponent implements OnInit {
  searchControl = new FormControl();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => this.http.get('https://api.github.com/search/users?q=' + value))
      )
      .subscribe(result => console.log('API Result:', result));
  }
}
    `,
  },

  {
    title: 'Parent to Child Data Communication',
    description: `We pass data from parent to child using the @Input() decorator. 
    This is commonly used to send values into a reusable component 
    (like passing a username or product details).`,
    code: `
// parent.component.ts
@Component({
  selector: 'app-parent',
  template: '<app-child [userName]="name"></app-child>'
})
export class ParentComponent {
  name = 'Ravi';
}

// child.component.ts
@Component({
  selector: 'app-child',
  template: '<p>Hello {{ userName }}</p>'
})
export class ChildComponent {
  @Input() userName!: string;
}
    `,
  },

  {
    title: 'Child to Parent Data Communication',
    description: `We use @Output() and EventEmitter to send data from child to parent. 
    This is useful when a child component wants to notify its parent about an event 
    (like a button click or form submission).`,
    code: `
// child.component.ts
@Component({
  selector: 'app-child',
  template: '<button (click)="sendMsg()">Click Me</button>'
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  sendMsg() {
    this.notify.emit('Hello Parent!');
  }
}

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: '<app-child (notify)="receiveMessage($event)"></app-child>'
})
export class ParentComponent {
  receiveMessage(msg: string) {
    console.log('Message from child:', msg);
  }
}
    `,
  },

  {
    title: 'Dynamic Form in Angular',
    description: `Reactive Forms allow us to build dynamic forms where fields 
    are generated from a JSON configuration. This is useful when form inputs 
    vary depending on requirements.`,
    code: `
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: \`
    <form [formGroup]="form">
      <div *ngFor="let field of fields">
        <label>{{field.label}}</label>
        <input [type]="field.type" [formControlName]="field.label" />
      </div>
    </form>
    <pre>{{ form.value | json }}</pre>
  \`
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.fields.forEach(f => this.form.addControl(f.label, this.fb.control('')));
  }
}
    `,
  },

  {
    title: 'Angular Routing with Parameters',
    description: `Angular Router lets us navigate between views. 
    Dynamic parameters like :id are used to load details of a specific item.`,
    code: `
// app-routing.module.ts
const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];

// user.component.ts
id = this.route.snapshot.paramMap.get('id');
    `,
  },

  {
    title: 'Lazy Loading Feature Modules',
    description: `Lazy loading loads feature modules only when needed, 
    which improves application performance.`,
    code: `
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];
    `,
  },

  {
    title: 'Using Async Pipe',
    description: `Async pipe subscribes to Observables/Promises in templates 
    and automatically unsubscribes when the component is destroyed.`,
    code: `
// component.html
<div *ngFor="let user of users$ | async">{{ user.name }}</div>

// component.ts
users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
    `,
  },

  {
    title: 'Custom Directive (Hover Color)',
    description: `Directives let us extend HTML behavior. 
    Example: A hover directive that changes text color when mouse enters/leaves.`,
    code: `
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
    `,
  },

  {
    title: 'CRUD Operations with HttpClient',
    description: `HttpClient in Angular allows GET, POST, PUT, DELETE API calls. 
    We create a service to centralize all CRUD operations.`,
    code: `
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() { return this.http.get('/api/users'); }
  addUser(user: any) { return this.http.post('/api/users', user); }
  deleteUser(id: number) { return this.http.delete('/api/users/' + id); }
}
    `,
  },

  {
    title: 'State Management with BehaviorSubject',
    description: `RxJS BehaviorSubject holds the latest state value 
    and allows components to subscribe and react to state changes.`,
    code: `
counter$ = new BehaviorSubject(0);
increment() { this.counter$.next(this.counter$.value + 1); }
    `,
  },

  {
    title: 'Conditional Rendering with *ngIf',
    description: `We use *ngIf with else block to display content based on conditions.`,
    code: `
<div *ngIf="isLoggedIn; else guest">Welcome User!</div>
<ng-template #guest>Guest User</ng-template>
    `,
  },

  {
    title: 'Reusable Modal Component',
    description: `ng-content enables content projection to make reusable modal components.`,
    code: `
// modal.component.html
<div class="modal">
  <ng-content></ng-content>
</div>

// usage
<app-modal>
  <h2>Title</h2>
  <p>Body content here</p>
</app-modal>
    `,
  },

  {
    title: 'Form Validation with Reactive Forms',
    description: `Reactive forms provide built-in validators (required, email, minLength, etc.).`,
    code: `
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]]
});
    `,
  },

  {
    title: 'Custom Pipe (Capitalize)',
    description: `A custom pipe can capitalize the first letter of a string.`,
    code: `
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
    `,
  },

  {
    title: 'Pagination with Slice Pipe',
    description: `Slice pipe is useful to display paginated lists.`,
    code: `
<li *ngFor="let item of items | slice:(page*5):(page*5+5)">{{item}}</li>
<button (click)="page=page+1">Next</button>
    `,
  },

  {
    title: 'Caching API Data',
    description: `We can use shareReplay to cache API responses 
    and avoid multiple network requests.`,
    code: `
private cache$!: Observable<any>;
getUsers() {
  if (!this.cache$) {
    this.cache$ = this.http.get('/api/users').pipe(shareReplay(1));
  }
  return this.cache$;
}
    `,
  },

  {
    title: 'Content Projection',
    description: `ng-content allows inserting custom content into reusable components.`,
    code: `
// card.component.html
<div class="card">
  <ng-content></ng-content>
</div>

// usage
<app-card>
  <h3>Title</h3>
  <p>Some description</p>
</app-card>
    `,
  },

  {
    title: 'Loading Spinner during API Call',
    description: `We can show a loading indicator while waiting for API response.`,
    code: `
<div *ngIf="loading">Loading...</div>
<ul *ngIf="!loading">
  <li *ngFor="let user of users">{{user.name}}</li>
</ul>
    `,
  },

  {
    title: 'HTTP Interceptor for Authentication',
    description: `Interceptors allow us to modify outgoing HTTP requests 
    (e.g., add authentication token).`,
    code: `
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const cloned = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next.handle(cloned);
}
    `,
  },

  {
    title: 'Route Guards for Protection',
    description: `Route guards like CanActivate prevent unauthorized access to routes.`,
    code: `
canActivate(): boolean {
  return !!localStorage.getItem('token');
}
    `,
  },
  {
    title: 'Two-Way Data Binding',
    description: `Two-way data binding in Angular synchronizes data between 
    the component class and the template using [(ngModel)]. 
    Changes in the UI update the class property, and vice versa.`,
    code: `
// app.component.ts
@Component({
  selector: 'app-root',
  template: '<input [(ngModel)]="name" /><p>Hello {{ name }}</p>'
})
export class AppComponent {
  name = 'Ravi';
}
    `,
  },

  {
    title: 'TrackBy in *ngFor',
    description: `Using trackBy in *ngFor improves performance by telling Angular 
    how to uniquely identify list items. This prevents re-rendering 
    the whole list when only one item changes.`,
    code: `
<li *ngFor="let user of users; trackBy: trackByFn">{{ user.name }}</li>

trackByFn(index: number, item: any) {
  return item.id;
}
    `,
  },

  {
    title: 'Lifecycle Hooks in Angular',
    description: `Angular provides lifecycle hooks like ngOnInit, ngOnChanges, 
    ngOnDestroy, etc. These allow you to tap into key events in a component’s lifecycle.`,
    code: `
@Component({
  selector: 'app-demo',
  template: '<p>Check console logs</p>'
})
export class DemoComponent implements OnInit, OnDestroy {
  ngOnInit() { console.log('Component Initialized'); }
  ngOnDestroy() { console.log('Component Destroyed'); }
}
    `,
  },

  {
    title: 'HTTP Error Handling',
    description: `HttpClient supports error handling with RxJS catchError. 
    This allows showing proper messages instead of app crashing.`,
    code: `
this.http.get('/api/users')
  .pipe(catchError(err => {
    console.error('Error occurred:', err);
    return of([]); // return empty array fallback
  }))
  .subscribe(data => console.log(data));
    `,
  },

  {
    title: 'Route Navigation Programmatically',
    description: `We can navigate between routes programmatically using Router service.`,
    code: `
constructor(private router: Router) {}

goToProfile(id: number) {
  this.router.navigate(['/user', id]);
}
    `,
  },

  {
    title: 'Reactive Form Array',
    description: `FormArray is used when we need a dynamic set of form controls, 
    like adding multiple addresses or phone numbers.`,
    code: `
form = this.fb.group({
  phones: this.fb.array([this.fb.control('')])
});

get phones() {
  return this.form.get('phones') as FormArray;
}

addPhone() {
  this.phones.push(this.fb.control(''));
}
    `,
  },

  {
    title: 'Pure vs Impure Pipes',
    description: `Pure pipes run only when input data changes, improving performance. 
    Impure pipes run on every change detection cycle.`,
    code: `
@Pipe({ name: 'impureExample', pure: false })
export class ImpureExamplePipe implements PipeTransform {
  transform(value: any[]) {
    return value.filter(v => v.active);
  }
}
    `,
  },

  {
    title: 'Template-Driven Forms',
    description: `Template-driven forms rely on directives like ngModel, ngForm, 
    and ngSubmit. They are simpler than reactive forms but less scalable.`,
    code: `
<form #f="ngForm" (ngSubmit)="submit(f)">
  <input name="email" ngModel required />
  <button type="submit">Submit</button>
</form>

submit(form: any) {
  console.log(form.value);
}
    `,
  },

  {
    title: 'Reactive Form with Validators',
    description: `Reactive forms allow complex validation logic using built-in and custom validators.`,
    code: `
form = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]]
});
    `,
  },

  {
    title: 'Custom Validator',
    description: `We can write custom validators for reactive forms 
    to enforce domain-specific rules.`,
    code: `
function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === 'admin' ? { forbiddenName: true } : null;
}

form = this.fb.group({
  username: ['', forbiddenNameValidator]
});
    `,
  },

  {
    title: 'Async Validator',
    description: `Async validators are used when validation requires 
    server-side checks, like verifying if a username already exists.`,
    code: `
usernameValidator(control: AbstractControl) {
  return this.http.get('/api/check-username/' + control.value)
    .pipe(map(res => res ? { userExists: true } : null));
}

form = this.fb.group({
  username: ['', null, this.usernameValidator.bind(this)]
});
    `,
  },

  {
    title: 'HttpClient Interceptor for Logging',
    description: `Interceptors can be used to log all outgoing requests and responses.`,
    code: `
intercept(req: HttpRequest<any>, next: HttpHandler) {
  console.log('Outgoing request:', req.url);
  return next.handle(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log('Response:', event);
      }
    })
  );
}
    `,
  },

  {
    title: 'Resolver in Angular Routing',
    description: `Resolvers fetch data before a route is activated. 
    This ensures required data is ready before navigating.`,
    code: `
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
  constructor(private service: UserService) {}
  resolve() { return this.service.getUsers(); }
}

// route config
{ path: 'users', component: UserListComponent, resolve: { users: UserResolver } }
    `,
  },

  {
    title: 'ViewChild Decorator',
    description: `@ViewChild gives direct access to a child component or DOM element.`,
    code: `
@Component({
  selector: 'app-parent',
  template: '<app-child></app-child><button (click)="callChild()">Call Child</button>'
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  callChild() { this.child.sayHello(); }
}
    `,
  },

  {
    title: 'ViewChildren with QueryList',
    description: `@ViewChildren returns multiple child components as a QueryList.`,
    code: `
@ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;

ngAfterViewInit() {
  this.items.forEach(item => item.highlight());
}
    `,
  },

  {
    title: 'ContentChild Decorator',
    description: `@ContentChild gives access to projected content from parent using ng-content.`,
    code: `
// card.component.html
<div class="card"><ng-content></ng-content></div>

// card.component.ts
@ContentChild('title') titleEl!: ElementRef;

// parent usage
<app-card><h2 #title>Card Title</h2></app-card>
    `,
  },

  {
    title: 'Structural Directive (*ngSwitch)',
    description: `ngSwitch helps in rendering one view from many options.`,
    code: `
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Welcome Admin</p>
  <p *ngSwitchCase="'user'">Welcome User</p>
  <p *ngSwitchDefault>Guest Access</p>
</div>
    `,
  },

  {
    title: 'Detect Changes Manually',
    description: `ChangeDetectorRef lets us trigger change detection manually 
    when Angular fails to detect updates.`,
    code: `
constructor(private cd: ChangeDetectorRef) {}

updateUI() {
  this.cd.detectChanges();
}
    `,
  },

  {
    title: 'Async/Await with HttpClient',
    description: `Instead of RxJS operators, we can use async/await for HttpClient 
    by converting to Promise.`,
    code: `
async fetchUsers() {
  const users = await this.http.get('/api/users').toPromise();
  console.log(users);
}
    `,
  },
];
