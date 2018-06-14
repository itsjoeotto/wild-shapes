import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import App from './App';
import ShapeDetail from './ShapeDetail';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/shape/:shapeId" component={ShapeDetail}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
);

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Router);