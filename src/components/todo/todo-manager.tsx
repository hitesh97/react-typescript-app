import * as React from 'react';
import * as AddTodo from './add-todo';
import {TodoListContainer} from './todo-list-container';

interface Props {
}
interface State {

}
export default class TodoManager extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>I am TODO Manager!
                <br /><br />
                <AddTodo.default />
                <TodoListContainer />
            </div>
        );
    }
}
