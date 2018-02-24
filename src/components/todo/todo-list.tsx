import * as React from 'react';
import {ITodo} from '../../features/todo/interfaces';
import FaBirthday from 'react-icons/lib/fa/birthday-cake';
import FaBook from 'react-icons/lib/fa/book';

interface Props {
    todos: ITodo[];
}

export class TodoList extends React.Component<Props, {}> {
    renderItems(items: ITodo[]): any {
        return (items.map((todo) => {
        return (
            <i key={todo.id}>
                <FaBirthday />
                <FaBook />
                {todo.text}
            </i>
        );
        }));
    }
    render() {
        return (
            <ul className="listStyle">
            {this.renderItems(this.props.todos)}
            </ul>);
    }
}
