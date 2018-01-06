import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BLOCKCHAIN from './reducers/index';

let store = createStore(BLOCKCHAIN);

ReactDOM.render(
   <MuiThemeProvider>
       <BrowserRouter>
        <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
   </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
