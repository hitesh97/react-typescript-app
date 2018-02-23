import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as countersActions from '../../features/counters/actions';
import { RootAction } from 'Features/root-action';

interface DispatchFromProps {
  handleClick: (text: string) => void;
}

interface State {
    text: string;
}

class AddTodo extends React.Component<DispatchFromProps, State> {

    constructor(props: DispatchFromProps) {
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {handleClick} = this.props;
        return (
            <div>
                <input name="input" onChange={this.handleChange} value={this.state.text} />
                <button onClick={() => handleClick(this.state.text)} >Add</button>
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
        if (text !== '') {
            dispatch(countersActions.AddTodo(text));
        }
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);
