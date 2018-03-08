import * as React from 'react';
import * as AddTodo from './add-todo';
import {TodoListContainer} from './todo-list-container';

interface Props {
}
interface State {

}
class TodoManager extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>I am TODO Manager!
                <AddTodo.default />
                <TodoListContainer />
            </div>
        );
    }
}

// tslint:disable-next-line:max-classes-per-file
class TodoSample extends React.Component<Props, State> {
    render() {
        return (
            <p>
            I am TODO Sample!
            </p>
        );
    }
}

export {TodoManager, TodoSample};
