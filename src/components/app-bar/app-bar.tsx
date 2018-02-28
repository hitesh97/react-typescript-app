import * as React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import { connect, Dispatch } from 'react-redux';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';
import * as recompose from 'recompose';

type Props = {
    loginButtonText: string;
};
interface DispatchFromProps {
    handleClick: () => void;
}
interface ITopBarState {
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'root'| 'flex' | 'menuButton'>;

class AppTopBar extends React.Component<PropsWithStyles, {State: ITopBarState} > {
    constructor(props: PropsWithStyles) {
        super(props);
    }

    render() {
        const {classes, loginButtonText, handleClick} = this.props;
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
            <Button color="inherit" onClick={() => handleClick()}>{loginButtonText}</Button>
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

const mapStateToProps = (state: ITopBarState) => ({
});
const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
    handleClick: () => {
        console.log('in handleClick');
        dispatch(TodoActions.OpenDrawer());
    },
});

export default recompose.compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
  )(AppTopBar);
