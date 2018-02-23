import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { ToDoreducer, ToDoState } from './counters/reducer';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  ToDoreducer: ToDoState;
}

import { RootAction } from './root-action';
export const rootReducer = combineReducers<RootState, RootAction>({
  router,
  ToDoreducer,
});
