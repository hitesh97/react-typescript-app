import * as React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';

interface Props {
}

class AppTopBar extends React.Component<Props & WithStyles<'root'>, {}> {
    render() {
        return (
            <AppBar position="static">
            <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" >
                BMUK Directory Material design
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        );
    }

}

const styles: StyleRulesCallback<'root'> = theme => ({
    root: {
        flexGrow: 1,
      },
      flex: {
        flex: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  });

export default withStyles(styles)<Props>(AppTopBar);
