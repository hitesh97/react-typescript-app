import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
// import Drawer from 'material-ui/Drawer';
// import List from 'material-ui/List';
// import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AddAPhoto from 'material-ui-icons/AddAPhoto';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
// import {RootState} from '../../features/root-reducer';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';
import { connect, Dispatch } from 'react-redux';
import * as recompose from 'recompose';
import { Link} from 'react-router-dom';

interface Props  {
}

interface DispatchFromProps {
    handleClick: () => void;
}

interface ITopBarState {
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'list'>;

class AddMemberItem extends React.Component<PropsWithStyles, ITopBarState> {
    constructor(props: PropsWithStyles) {
        super(props);
    }
    render() {
        const {handleClick} = this.props;
        return (
            <div>
            <ListItem button={true} onClick={() => handleClick()} >
            <ListItemIcon>
                <AddAPhoto/>
            </ListItemIcon>
            <ListItemText primary="Add Member" />
            </ListItem>
            <Link to="/todo">Homes</Link>
           </div>
        );
    }
}

const styles = (theme: Theme) => ({
    list: {
      },
  });

const mapStateToProps = (state: ITopBarState): any => ({
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: () => {
        console.log('Add Member');
        dispatch(TodoActions.AddMember());
    },
});

export default recompose.compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
  )(AddMemberItem);
