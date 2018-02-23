import { createAction } from 'typesafe-actions';
import {ADD_TODO, REMOVE_TODO} from './action-constants';

export const AddTodo = createAction(ADD_TODO, (text: string) => ({
  type: ADD_TODO,
  payload: text,
}));

export const RemoveTodo = createAction(REMOVE_TODO, (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
}));
