import React, { Component } from 'react';


class ShapeTile extends Component {

  goToShape = () => {
    console.log('click', this.props.details);
    let shapeId = this.props.details.id;
    this.props.routing.history.push(`/shape/${shapeId}`);
  }

  render() {
    console.log('props', this.props);
    const details = this.props.details;
    return (
      <div onClick={this.goToShape}>{details.name}, {details.ac}</div>
    );
  }
}

export default ShapeTile;