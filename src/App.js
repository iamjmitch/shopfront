import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Logo from './assets/global/logo.svg';

import HomePage from './pages/homepage/homepage.component';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
