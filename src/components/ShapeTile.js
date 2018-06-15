import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ShapeTile extends Component {

  selectShape = () => {
    this.props.dispatch({type: 'SELECT_SHAPE', payload: this.props.shape});
  }

  render() {
    console.log('props', this.props);
    const details = this.props.shape;
    return (
      <div>
        <Link to={`/shape/${details._id}`} onClick={this.selectShape}>{details.name}, {details.ac}</Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ShapeTile);