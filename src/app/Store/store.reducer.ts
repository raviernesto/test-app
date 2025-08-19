import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './store.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
    if(Number(state) <= 0){
      return state;
    }
    return state - 1;
  }),
  on(reset, () => 0)
);
