import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShapeDetail extends Component {
  componentWillMount() {
    let idParam = this.props.match.params.shapeId;
    let id = this.props.reduxState.shapeListReducer.filter(shape => shape._id === idParam);
    console.log('param', id);
    if (id.length === 0) {
      
      
    }
  }

  componentDidMount() {
    console.log('hi. check for selected shape here', this.props);
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.reduxState.selectShapeReducer)}</pre>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ShapeDetail);