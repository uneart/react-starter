import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import reducers from './reducers'

import App from './components/App';
import NotFound from './components/NotFound';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(reducers, compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
      <Router history={createHistory()}>
    <Provider store={store}>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>
    , document.querySelector('#main'));
