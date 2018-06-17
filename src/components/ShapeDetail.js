import React, { Component } from 'react';
import { connect } from 'react-redux';
import HitPoints from './HitPoints';


class ShapeDetail extends Component {
  componentWillMount() {
    let idParam = this.props.match.params.shapeId;
    let id = this.props.reduxState.druidWildShapesReducer.shapes.filter(shape => shape._id === idParam);
    console.log('param', id);
    if (id.length === 0) {
      console.log('hi');
      
    }
  }

  componentDidMount() {
    console.log('hi. check for selected shape here', this.props);
  }

  render() {
    let shape = this.props.reduxState.druidWildShapesReducer.selectedShape;
    return (
      <div>
        <p>{shape.name}</p>
        <p>AC: {shape.ac}</p>
        <p>Hit Points: {shape.hp.num}d{shape.hp.diceType} + {shape.hp.modifier} ({shape.hp.average}) </p>
        <p>Str: {shape.attributes.str}</p>
        <p>Dex: {shape.attributes.dex}</p>
        <p>Con: {shape.attributes.con}</p>
        <p>Int: {shape.attributes.int}</p>
        <p>Wis: {shape.attributes.wis}</p>
        <p>Cha: {shape.attributes.cha}</p>
        <p>Speed: {shape.speed}</p>
        <p>Size: {shape.size} </p>
        <p>Skills: {shape.skills}</p>
        <p>Senses: {shape.senses}</p>
        <p>Challenge: {shape.challenge}</p>
        <p>Traits: {shape.traits}</p>
        <p>Actions: {shape.actions} </p>
        <HitPoints hp={shape.hp}/>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ShapeDetail);