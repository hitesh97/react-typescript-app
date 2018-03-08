import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import {RootState} from '../../features/root-reducer';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';
import { connect, Dispatch } from 'react-redux';
import MenuItemList from './menu-item-list';

interface Props  {
    open: boolean;
}

interface DispatchFromProps {
    handleClick: () => void;
}

interface ITopBarState {
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'list'>;

class AppDrawer extends React.Component<PropsWithStyles, ITopBarState & RootState> {
    constructor(props: PropsWithStyles) {
        super(props);
    }

    render() {
        const {classes, open, handleClick} = this.props;
        const sideList = (
            <div className={classes.list}>
              <List>
                <MenuItemList />
              </List>
            </div>
          );
        return (
            <Drawer id="mainDrawer" open={open} onClick={() => handleClick()}>
                {sideList}
            </Drawer>
        );
    }
}

const styles = (theme: Theme) => ({
    list: {
        width: 200,
      },
  });

const mapStateToProps = (state: ITopBarState & RootState): any => ({
    open: state.AppReducer.drawerIsOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: () => {
        dispatch(TodoActions.CloseDrawer());
    },
});

const cc1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer);

export default withStyles(styles)<Props>(cc1);
