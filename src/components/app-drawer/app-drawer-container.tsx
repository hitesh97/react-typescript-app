import { connect, Dispatch } from 'react-redux';
import * as AppDrawer from './app-drawer';
import {RootState} from '../../features/root-reducer';
import { RootAction } from 'Features/root-action';
import * as TodoActions from '../../features/counters/actions';

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

const AppDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppDrawer.default);

export default AppDrawerContainer;
