import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const warn = createAction('[Counter] Warn');
export const reset = createAction('[Counter] Reset');
