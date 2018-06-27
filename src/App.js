import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/home';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
