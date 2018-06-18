import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const druidWildShapesReducer = (state = { shapes: [],
                                    selectedShape: {},
                                    shapeHP: {
                                        totalHP: 0,
                                        currentHP: 0 },
                                    combatLog: []}, action) => {
    switch (action.type) {
        case 'SET_SHAPES':
            return {...state, shapes: action.payload};
        case 'SELECT_SHAPE':
            return {...state, selectedShape: action.payload};
        case 'SET_TOTAL_HP':
            return {...state, shapeHP: {...state.shapeHP, totalHP: action.payload} }
        case 'SET_CURRENT_HP':
            return {...state, shapeHP: {...state.shapeHP, currentHP: action.payload} }
        case 'SET_COMBAT_LOG':
            return {...state, combatLog: [...state.combatLog, action.payload]}
        case 'CLEAR_COMBAT_LOG':
            return {...state, combatLog: []}
        default:
            return state;
    }
}

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