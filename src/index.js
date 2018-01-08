import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import BLOCKCHAIN from './reducers/index';
import thunk from 'redux-thunk';
import history from './history';

let store = createStore(
    BLOCKCHAIN,
    applyMiddleware(thunk)
);

ReactDOM.render(
   <MuiThemeProvider>
       <Router history={history}>
        <Provider store={store}>
                <App />
            </Provider>
        </Router>
   </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
