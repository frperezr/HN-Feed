// Node Modules
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import News from './containers/news';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={News} />
        </Switch>
      </div>
    );
  }
}
