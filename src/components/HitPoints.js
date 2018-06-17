import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateHitPoints } from '../helpers';

class HitPoints extends Component {

  roll4pwny = () => {
    let hpData = this.props.hp;
    let hpValue = generateHitPoints(hpData);
    this.props.dispatch({type: 'SET_HP', payload: hpValue});
  }

  render() {
    console.log('props wooooooooo', this.props);
    return (
      <div>
          <h1>Hit Points: {this.props.reduxState.druidWildShapesReducer.shapeHP}</h1>
        <button onClick={this.roll4pwny} >Roll Hit Dice</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(HitPoints);