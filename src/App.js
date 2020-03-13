import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Logo from './assets/global/logo.svg';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return <div>Hats Page</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
