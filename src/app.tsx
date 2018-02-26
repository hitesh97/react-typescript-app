import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { History } from 'history';
// tslint:disable-next-line:no-import-side-effect
import './styles/app.scss';

// import { ListView } from 'Components/list-view';
// import { TodoManager } from 'Components/todo/todo-manager';
// import AppTopBar from '../src/components/app-bar/app-bar';
import MainPage from './components/main-page';

interface Props {
  store: Store<any>;
  history: History;
}

export class App extends React.Component<Props, {}> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            exact={true}
            path="/"
            render={() => (
                <div>
                  <MainPage/>
                </div>
            )}
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}
