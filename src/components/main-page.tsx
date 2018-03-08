import * as React from 'react';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../../src/withRoot';
import AppTopBar from '../components/app-bar/app-bar';
import {TodoManager, TodoSample} from './todo/todo-manager';
import AppDrawer from '../components/app-drawer/app-drawer';
import Grid from 'material-ui/Grid';
import { Route } from 'react-router-dom';

interface MainPageProps {
}

export class MainPage extends React.Component<MainPageProps & WithStyles<'root'>, {}> {
  render() {
    return (
      <>
        <AppTopBar loginButtonText="Hitesh" />
        <br /><br />
        <Grid container={true}>
          <Grid item={true} xs={1} />
          <Grid item={true} xs={10}>
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
          </Grid>
          <Grid item={true} xs={1} />
        </Grid >
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
