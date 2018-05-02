import React, { Component } from 'react';
import '../App.css';
import ShapeTile from './ShapeTile';
import HitPoints from './HitPoints';
import { generateHitPoints } from '../helpers';
import axios from 'axios';

class App extends Component {
  state = {
    shapes: [],
    favorites: [],
    hp: 0,
    data: {}
  };

  componentDidMount = () => {
    axios.get('http://localhost:5000/shapes')
    .then(res => {
      this.setState({ shapes: res.data });
    })
    .catch(err => {
      console.log('err', err);
    });
  }


  render() {
    return (
      <div>
        <ul className="shapes">
          {Object.keys(this.state.shapes).map(key => <ShapeTile
            key={key}
            index={key} 
            routing={this.props} 
            details={this.state.shapes[key]} />)}
        </ul>
        <HitPoints hitPoints={this.state.hp} data={this.state.shapes[0]} rollHitPoints={this.rollHitPoints} />
      </div>
    );
  }
}

export default App;