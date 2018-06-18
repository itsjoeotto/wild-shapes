import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateHitPoints } from '../helpers';

class HitPoints extends Component {

  state = {
    healOrDamageValue: ''
  }

  roll4pwny = () => {
    let hpData = this.props.hp;
    let hpValue = generateHitPoints(hpData);
    this.props.dispatch({ type: 'SET_TOTAL_HP', payload: hpValue });
    this.props.dispatch({ type: 'SET_CURRENT_HP', payload: hpValue });
  }

  handleValueChange = propertyName => ev => {
    this.setState({ [propertyName]: ev.target.value });
  }

  changeHp = ev => {
    if (ev.target.id === 'damage') {
      let newCurrentHP = this.props.reduxState.druidWildShapesReducer.shapeHP.currentHP -= this.state.healOrDamageValue;
      this.props.dispatch({ type: 'SET_CURRENT_HP', payload: newCurrentHP });
    } else if (ev.target.id === 'heal') {
      //make sure this is adding instead of concatenating
      let stateValueAsNumber = parseInt(this.state.healOrDamageValue, 10);
      let newCurrentHP = this.props.reduxState.druidWildShapesReducer.shapeHP.currentHP += stateValueAsNumber;
      
      // check to make sure newCurrentHP cannot be higher than totalHP. throws a linter error but works, so....
      // eslint-disable-next-line
      (newCurrentHP > this.props.reduxState.druidWildShapesReducer.shapeHP.totalHP)
      ? newCurrentHP = this.props.reduxState.druidWildShapesReducer.shapeHP.totalHP
      : '';

      //set current hp state to new value or max hp
      this.props.dispatch({ type: 'SET_CURRENT_HP', payload: newCurrentHP });
    }

    this.createCombatLogEntry(ev.target.id, this.state.healOrDamageValue);
  }

  createCombatLogEntry = (logType, value) => {
    if (logType === 'damage') {
      let logEntry = `- ${value}`;
      this.props.dispatch({ type: 'SET_COMBAT_LOG', payload: logEntry })
    } else if (logType === 'heal') {
      let logEntry = `+ ${value}`;
      this.props.dispatch({ type: 'SET_COMBAT_LOG', payload: logEntry })
    }
  }

  render() {
    let currentHP = this.props.reduxState.druidWildShapesReducer.shapeHP.currentHP;
    let totalHP = this.props.reduxState.druidWildShapesReducer.shapeHP.totalHP;
    return (
      <div>
        <h1>Hit Points: {currentHP}/{totalHP}</h1>
        <button type="button" onClick={this.roll4pwny} >Roll Hit Dice</button>
        <button type="button" id="damage" onClick={this.changeHp}>Damage</button>
        <input name="healOrDamageValue" value={this.state.healOrDamageValue} onChange={this.handleValueChange('healOrDamageValue')} type="number" />
        <button type="button" id="heal" onClick={this.changeHp}>Heals</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(HitPoints);