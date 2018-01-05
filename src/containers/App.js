import React from 'react';
import { Provider } from 'react-redux';

import Home from '../containers/Home';

//import react router deps
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { store, history } from '../store/Store';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    )}
}

export default App;
