import * as React from 'react';

interface Props {
}

interface State {

}

class AddTodo extends React.Component<Props, State> {

    input: any;

    render() {
        return (
            <div>
                <input name="input" ref={node => {this.input = node; }} />
                <button type="button" onClick={e => {this.onSubmit(this.input.value); }}>Add</button>
            </div>
        );
    }
    onSubmit(todoText: string): void {
/*         console.log('***************************');
        console.log(todoText);
        console.log('***************************'); */
    }
}

export default AddTodo;
