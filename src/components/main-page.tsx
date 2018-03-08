import * as React from 'react';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../../src/withRoot';
import AppTopBar from '../components/app-bar/app-bar';
import {TodoManager, TodoSample} from './todo/todo-manager';
import AppDrawer from '../components/app-drawer/app-drawer';
import { Route } from 'react-router-dom';

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps & WithStyles<'root'>, {}> {
  render() {
    return (
      <>
        <AppTopBar loginButtonText="Hitesh" />
        <Route
            exact={true}
            path={'/todo'}
            render={(props) => (
              <TodoManager {...props} />
          )}
        />
        <Route
            exact={true}
            path={'/todo/sample'}
            render={(props) => (
              <TodoSample {...props} />
          )}
        />
        <AppDrawer open={false} />
      </>
    );
  }
}

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
  },
});

export default withRoot(withStyles(styles)<MainPageProps>(MainPage));
