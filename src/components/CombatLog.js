import React, { Component } from "react";
import { connect } from 'redux';


class CombatLog extends Component{
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapStateToProps)(CombatLog);