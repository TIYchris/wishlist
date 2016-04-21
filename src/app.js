import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';


// Components
import Login from 'ui/login';
import Events from 'ui/events';
import List from 'ui/list';
import UserWishList from "ui/userWishList";

render(  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Login} />
      <Route path="/events" component={Events} />
      <Route path="/list/:id" component={List} />
      <Route path="/userWishList" component={UserWishList} />
      <Route path="/item/:itemId" component={List} />
    </Route>
  </Router>
, document.getElementById('app'));