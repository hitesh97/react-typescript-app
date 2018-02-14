import { createAction } from 'typesafe-actions';
import {ADD, INCREMENT} from './action-constants';

export const increment = createAction(INCREMENT);
export const add = createAction(ADD, (amount: number) => ({
  type: ADD, payload: amount,
}));
