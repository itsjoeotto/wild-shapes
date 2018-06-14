import React, { Component } from 'react';
import '../App.css';
import ShapeTile from './ShapeTile';
import HitPoints from './HitPoints';
import axios from 'axios';
import { connect } from 'react-redux';
import base from '../base';

class App extends Component {

  componentDidMount = () => {
    this.ref = base.syncState()
  }


  render() {
    return (
      <div>
        {/* <ul className="shapes">
          {Object.keys(this.state.shapes).map(key => <ShapeTile
            key={key}
            index={key} 
            routing={this.props} 
            details={this.state.shapes[key]} />)}
        </ul> */}
        {/* <HitPoints hitPoints={this.state.hp} data={this.state.shapes[0]} rollHitPoints={this.rollHitPoints} /> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);