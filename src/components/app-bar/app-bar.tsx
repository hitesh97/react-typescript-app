import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import { connect, Dispatch } from 'react-redux';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';
import Menu, { MenuItem } from 'material-ui/Menu';

type Props = {
    loginButtonText: string;
};
interface DispatchFromProps {
    handleClick: () => void;
}
interface ITopBarState {
    anchorEl: HTMLElement | null;
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'root'| 'flex' | 'menuButton'>;

class AppTopBar extends React.Component<PropsWithStyles, ITopBarState> {

    constructor(props: PropsWithStyles) {
        super(props);
        this.state = {anchorEl : null};
        this.onUserMenuClick = this.onUserMenuClick.bind(this);
    }

    onUserMenuClick(e: any) {
        if (this.state.anchorEl) {
            this.setState({anchorEl: null});
        } else {
            this.setState({anchorEl: e.currentTarget});
        }
    }
    render() {
        const {classes, loginButtonText, handleClick} = this.props;
        const { anchorEl } = this.state;
        return (
            <div className={classes.root}>
            <AppBar position="static" >
            <Toolbar>

            <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}  onClick={() => handleClick()}>
                <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.flex}>
                BMUK Directory Material design
            </Typography>

            <IconButton
                color="inherit"
                aria-label="Menu"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                className={classes.menuButton}
                onClick={this.onUserMenuClick}
            >
                <AccountCircle />
            </IconButton>
            </Toolbar>
            </AppBar>
            <Menu
                anchorEl={this.state.anchorEl}
                id="simple-menu"
                open={Boolean(anchorEl)}
                onClose={this.onUserMenuClick}
            >
                <MenuItem onClick={this.onUserMenuClick}>Profile</MenuItem>
                <MenuItem onClick={this.onUserMenuClick}>My account</MenuItem>
                <MenuItem onClick={this.onUserMenuClick}>Logout</MenuItem>
                <MenuItem onClick={this.onUserMenuClick}>{loginButtonText}</MenuItem>
            </Menu>
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

const mapStateToProps = (state: ITopBarState) => ({
});
const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: () => {
        dispatch(TodoActions.OpenDrawer());
    },
});

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppTopBar);

export default withStyles(styles)<Props>(connectedComponent);
