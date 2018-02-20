import { createAction } from 'typesafe-actions';
import {ADD, INCREMENT, ADD_TODO, REMOVE_TODO} from './action-constants';

export const increment = createAction(INCREMENT);
export const add = createAction(ADD, (amount: number) => ({
  type: ADD, payload: amount,
}));

export const AddTodo = createAction(ADD_TODO, (text: string) => ({
  type: ADD_TODO,
  payload: text,
}));

export const RemoveTodo = createAction(REMOVE_TODO, (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
}));
