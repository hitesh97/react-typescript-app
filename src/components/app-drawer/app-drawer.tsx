import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import {RootState} from '../../features/root-reducer';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';
import { connect, Dispatch } from 'react-redux';

type Props = {
    open: boolean;
};

interface DispatchFromProps {
    handleClick: () => void;
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'list'>;

class AppDrawer extends React.Component<PropsWithStyles, {}> {
    constructor(props: PropsWithStyles) {
        super(props);
    }

    render() {
        const {classes, open, handleClick} = this.props;
        const sideList = (
            <div className={classes.list}>
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
            </div>
          );
        return (
            <div>
                <Drawer open={open} onClick={() => handleClick()}>
                    {sideList}
                </Drawer>
            </div>
        );
    }
}

const styles = (theme: Theme) => ({
    list: {
        width: 200,
      },
  });

const mapStateToProps = (state: RootState) => {
    return {
      open: state.AppReducer.drawerIsOpen,
      };
    };

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: () => {
        dispatch(TodoActions.CloseDrawer());
    },
});

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer);

export default withStyles(styles)<Props>(connectedComponent);
