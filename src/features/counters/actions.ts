import { createAction } from 'typesafe-actions';
import {
  ADD_TODO,
  REMOVE_TODO,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from './action-constants';

export const AddTodo = createAction(ADD_TODO, (text: string) => ({
  type: ADD_TODO,
  payload: text,
}));

export const RemoveTodo = createAction(REMOVE_TODO, (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
}));

export const OpenDrawer = createAction(OPEN_DRAWER, () => ({
  type: OPEN_DRAWER,
  payload: true,
}));

export const CloseDrawer = createAction(CLOSE_DRAWER, () => ({
  type: CLOSE_DRAWER,
  payload: false,
}));
