import * as React from 'react';
import {ITodo} from '../../features/todo/interfaces';

interface Props {
    todos: ITodo[];
}

export class TodoList extends React.Component<Props, {}> {
    render() {
        return (
            <ul className="listStyle">{this.props.todos.map((todo) => <i key={todo.id}>{todo.text}</i>)}</ul>
          );
    }
}
