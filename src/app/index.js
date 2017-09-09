import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Bingo from './components/home/Bingo';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => { window.scrollTo(0, 0) }} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Bingo} />;
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
