import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PersonAdd from 'material-ui-icons/PersonAdd';
import ViewList from 'material-ui-icons/ViewList';
import ZoomIn from 'material-ui-icons/ZoomIn';
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

class MenuItemList extends React.Component<PropsWithStyles, ITopBarState> {
    constructor(props: PropsWithStyles) {
        super(props);
    }
    render() {
        return (
            <>
            <ListItem button={true} >
            <ListItemIcon>
                <ViewList/>
            </ListItemIcon>
            <Link to="/members/list">
                <ListItemText primary="List Members" />
            </Link>
            </ListItem>
            <ListItem button={true} >
            <ListItemIcon>
                <ZoomIn/>
            </ListItemIcon>
            <Link to="/members/details">
                <ListItemText primary="Details" />
            </Link>
            </ListItem>
            <ListItem button={true} >
            <ListItemIcon>
                <PersonAdd/>
            </ListItemIcon>
            <Link to="/members/add">
                <ListItemText primary="Add Member" />
            </Link>
            </ListItem>
           </>
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
        dispatch(TodoActions.AddMember());
    },
});

export default recompose.compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
  )(MenuItemList);
