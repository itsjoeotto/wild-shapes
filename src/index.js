import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { druidWildShapesReducer } from './reducers/wild-shape-reducer';


const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
});

const store = createStore(
    combineReducers({
        druidWildShapesReducer,
        // selectShapeReducer
    }),
    composeEnhancers(
        applyMiddleware(logger)
    )
);

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));