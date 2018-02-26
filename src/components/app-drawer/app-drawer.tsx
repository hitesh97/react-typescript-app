import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

type Props = {
};

interface ITopBarState {
    open: boolean;
}

type PropsWithStyles = Props & WithStyles<'list'>;

class AppDrawer extends React.Component<PropsWithStyles, ITopBarState > {
    constructor(props: PropsWithStyles) {
        super(props);
    }
    componentWillMount() {
        this.setState({open: true});
    }
    render() {
        const {classes} = this.props;
        const sideList = (
            <div className={classes.list}>
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
            </div>
          );
        return (
            <div>
                <Drawer open={this.state.open} >
                    {sideList}
                </Drawer>
            </div>
        );
    }
}

const styles = (theme: Theme) => ({
    list: {
        width: 250,
      },
  });

export default withStyles(styles)<Props>(AppDrawer);
