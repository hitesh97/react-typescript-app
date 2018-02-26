import * as React from 'react';
import {ITodo} from '../../features/todo/interfaces';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../../../src/withRoot';

interface Props {
    todos: ITodo[];
}

class TodoList extends React.Component<Props & WithStyles<'root'>, {}> {
    renderItems(items: ITodo[]): any {
        return (items.map((todo) => {
        return (
            <i key={todo.id}>
                {todo.text}&nbsp;
                <IconButton>
                    <Delete />
                </IconButton>
                <Button variant="raised" color="primary" >
                    Super Secret Password
                </Button>
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
const styles: StyleRulesCallback<'root'> = theme => ({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
    },
  });

export default withRoot(withStyles(styles)<Props>(TodoList));
