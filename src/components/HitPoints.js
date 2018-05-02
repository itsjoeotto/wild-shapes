import React, { Component } from 'react';

class HitPoints extends Component {

  render() {
    console.log('props wooooooooo', this.props);
    return (
      <div>
          <h1>Hit Points: {this.props.hitPoints}</h1>
        <button onClick={this.props.rollHitPoints} >Roll Hit Dice</button>
      </div>
    );
  }
}

export default HitPoints;