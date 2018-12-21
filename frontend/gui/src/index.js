import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'react-redux';

import { Provider } from 'redux-thunk';

import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || COMPOSE
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();