import { connect } from 'react-redux';
import * as TodoList from './todo-list';
import {RootState} from '../../features/root-reducer';

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.ToDoreducer.toDos,
    };
  };

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
  };

export const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList.default);
