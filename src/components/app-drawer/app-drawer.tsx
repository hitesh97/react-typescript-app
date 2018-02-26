import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

type Props = {
    open: boolean;
    handleClick: () => void;
};

interface ITopBarState {
}

type PropsWithStyles = Props & WithStyles<'list'>;

class AppDrawer extends React.Component<PropsWithStyles, ITopBarState > {
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

export default withStyles(styles)<Props>(AppDrawer);
