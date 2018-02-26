import * as React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';

type Props = {
    loginButtonText: string;
};

interface ITopBarState {
    count: number;
}

type PropsWithStyles = Props & WithStyles<'root'| 'flex' | 'menuButton'>;

class AppTopBar extends React.Component<PropsWithStyles, {State: ITopBarState} > {
    constructor(props: PropsWithStyles) {
        super(props);
    }
    componentWillMount() {
        this.setState({State: {count: 10}});
    }

    render() {
        const {classes, loginButtonText} = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static" >
            <Toolbar>
            <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
                BMUK Directory Material design
            </Typography>
            <Button color="inherit">{loginButtonText} {this.state.State.count}</Button>
            </Toolbar>
            </AppBar>
            </div>
        );
    }
}

const styles = (theme: Theme) => ({
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
