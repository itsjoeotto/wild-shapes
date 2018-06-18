import React, { Component } from "react";
import { connect } from 'react-redux';


class CombatLog extends Component{

    clearCombatLog = () => {
        this.props.dispatch({type: 'CLEAR_COMBAT_LOG', payload: []});
    }
    render() {
        let combatLog = this.props.reduxState.druidWildShapesReducer.combatLog;
        return (
            <div>
                <h3>Combat Log:</h3>
                {combatLog}
                <button onClick={this.clearCombatLog}>Clear Combat Log</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapStateToProps)(CombatLog);