import * as React from 'react';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../../src/withRoot';
import AppTopBar from '../components/app-bar/app-bar';
import TodoManager from './todo/todo-manager';
// import AppDrawer from '../components/app-drawer/app-drawer';
import AppDrawerContainer from '../components/app-drawer/app-drawer-container';

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps & WithStyles<'root'>, {}> {
  render() {
    return (
      <>
        <AppTopBar loginButtonText="Hitesh" />
        <TodoManager />
        <AppDrawerContainer />
      </>
    );
  }
}

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
  },
});

export default withRoot(withStyles(styles)<MainPageProps>(MainPage));
