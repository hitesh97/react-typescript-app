import * as React from 'react';
import * as AddTodo from './add-todo';

interface Props {
}
interface State {
  
}
export class TodoManager extends React.Component<Props, State> {

    render() {
        return (
            <div>I am TODO Manager! 
                <br /><br />
                <AddTodo.default />
            </div>
        );
    }
}