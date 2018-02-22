import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as countersActions from '../../features/counters/actions';
// import {rootReducer} from '../../features/root-reducer';
import { RootAction } from 'Features/root-action';
// import { ToDoState} from '../../features/counters/reducer';

interface DispatchFromProps {
  handleClick: (text: string) => void;
}

interface State {
    text: string;
}

class AddTodo extends React.Component<DispatchFromProps, State> {

    constructor(props: DispatchFromProps) {
        super(props);
        this.state = {text: 'Hitesh'};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {handleClick} = this.props;
        return (
            <div>
                <input name="input" onChange={this.handleChange} value={this.state.text} />
                <button onClick={() => handleClick(this.state.text)} >Add</button>
                <span>{this.state.text}</span>
            </div>
        );
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({text: e.target.value});
    }
}

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: (text: string) => {
        dispatch(countersActions.AddTodo(text));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);
