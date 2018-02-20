import { connect } from 'react-redux'
import * as React from 'react';
import { AddTodo as AddTodoAction} from '../../features/counters/actions'

interface Props {
}

interface State {
  
}

class AddTodo extends React.Component<Props, State> {

    input: any;

    render() {
        return (
            <div>
                <input name="input" ref={node => {this.input = node}} />
                <button type="button" onClick={e => {this.onSubmit(this.input.value)}}>Add</button>
            </div>
        );
    }
    onSubmit(todoText: string): void {
        console.log('***************************');
        console.log(todoText);
        dispatchEvent
        console.log('***************************');
    }
}

export default AddTodo;

/* const mapStateToProps = (state : any, ownProps: any) => {return {}}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {return {
    onSubmit: dispatch(AddTodoAction(ownProps.Text))
}}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

 */