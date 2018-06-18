import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateHitPoints } from '../helpers';

class HitPoints extends Component {

  roll4pwny = () => {
    let hpData = this.props.hp;
    let hpValue = generateHitPoints(hpData);
    this.props.dispatch({type: 'SET_TOTAL_HP', payload: hpValue});
    this.props.dispatch({type: 'SET_CURRENT_HP', payload: hpValue});
  }

  render() {
    let currentHP = this.props.reduxState.druidWildShapesReducer.shapeHP.currentHP;
    let totalHP = this.props.reduxState.druidWildShapesReducer.shapeHP.totalHP;
    return (
      <div>
          <h1>Hit Points: {currentHP}/{totalHP}</h1>
        <button onClick={this.roll4pwny} >Roll Hit Dice</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(HitPoints);