import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dash from 'components/Pages/Dash';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Dash} />
    </Switch>
  </React.Fragment>
);

export default App;
