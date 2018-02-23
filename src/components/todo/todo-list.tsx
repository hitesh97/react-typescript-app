import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {ITodo} from '../../features/todo/interfaces';
import styles from '../../styles/todo-list.css';

interface Props {
    todos: ITodo[];
}

export class TodoList extends React.Component<Props, {}> {
    render() {
        return (
            <ul style={styles.listStyle}>{this.props.todos.map((todo) => <i key={todo.id}>{todo.text}</i>)}</ul>
          );
    }
}
