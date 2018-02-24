import { combineReducers } from 'redux';
import { getType, getReturnOfExpression } from 'typesafe-actions';
import { ITodo, Todo } from '../todo/interfaces';

import * as todoActions from './actions';
const returnsOfActions = Object.values(todoActions).map(getReturnOfExpression);
export type Action = typeof returnsOfActions[number];

export type ToDoState = {
  readonly toDos: ITodo[];
};

export const ToDoreducer = combineReducers <ToDoState, Action> ({
  toDos: (state: ITodo[] = new Array<ITodo>(), action: any) => {
    switch (action.type) {
      case getType(todoActions.AddTodo): {
        const newTodo: Todo  = new Todo();
        newTodo.text = action.payload;
        newTodo.id = state.length + 1;
        return [...state, newTodo];
      }
      case getType(todoActions.RemoveTodo): {
        return state.filter(x => x.id !== action.payload);
      }

      default:
        return state;
    }
  },
});
