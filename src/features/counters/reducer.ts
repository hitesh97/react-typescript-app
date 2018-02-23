import { combineReducers } from 'redux';
import { getType, getReturnOfExpression } from 'typesafe-actions';
import { ITodo, Todo } from '../todo/interfaces';

import * as countersActions from './actions';
const returnsOfActions = Object.values(countersActions).map(getReturnOfExpression);
export type Action = typeof returnsOfActions[number];

export type ToDoState = {
  readonly toDos: ITodo[];
};

export const ToDoreducer = combineReducers<ToDoState, Action>({
  toDos: (state: ITodo[] = new Array<ITodo>(), action) => {
    switch (action.type) {
      case getType(countersActions.AddTodo): {
        console.log('in reducer !!');
        const newTodo: Todo  = new Todo();
        newTodo.text = action.payload;
        newTodo.id = state.length + 1;
        const returnState = [...state, newTodo];

        console.log(returnState);
        console.log('in reducer 2!!');
        return returnState;
      }
      case getType(countersActions.RemoveTodo): {
        return state.filter(x => x.id !== action.payload);
      }

      default:
        return state;
    }
  },
});
