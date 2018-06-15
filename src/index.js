import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const shapeListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHAPES':
            return action.payload;
        default:
            return state;
    }
}

const selectShapeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_SHAPE':
            return action.payload;
        default:
            return state;
    }
}

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

const store = createStore(
    combineReducers({
        shapeListReducer,
        selectShapeReducer
    }),
    composeEnhancers(
        applyMiddleware(logger)
    )
);

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));