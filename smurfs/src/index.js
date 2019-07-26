import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import { reducer } from './store/reducers';
import App from "./components/App";

import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById("root"));
