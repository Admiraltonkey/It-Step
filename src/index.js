import React from 'react';
import './index.css';
import store from './Redux/redux-store.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


    ReactDOM.render( <Provider store ={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </Provider>, document.getElementById('root'));



// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
