import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Tips from './components/Tips';
import './App.css';


class App extends Component {
    state = {
      tips: [
        {
          id: uuid(),
          amount: 500,
          person_count: 3,
          tip: 50,
          total: 550,
          total_per_person: 183.33
        },
        {
          id: uuid(),
          amount: 1000,
          person_count: 3,
          tip: 100,
          total: 1100,
          total_per_person: 366.66
        }
      ],
      len: 1,
  }
  render() {
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <Tips tips={this.state.tips} len={this.state.len}/>
      </div>
    );
  }
}

export default App;
