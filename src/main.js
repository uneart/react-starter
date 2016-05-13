import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import reducers from './reducers'

import App from './components/App';
import NotFound from './components/NotFound';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={createHistory()}>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>
    , document.querySelector('#main'));
