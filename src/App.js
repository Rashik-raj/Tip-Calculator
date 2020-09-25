import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import AddTips from './components/AddTip';
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

  addTip = (amount, person_count) => {
    const newTip = {
      id: uuid(),
      amount,
      person_count,
      tip: Number(amount)*10/100,
      total: Number(amount) + (Number(amount)*10/100),
      total_per_person: (Number(amount) + (Number(amount)*10/100)) / person_count,
    }
    this.setState({
      tips: [...this.state.tips, newTip]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <AddTips addTip={this.addTip}/>
        <Tips tips={this.state.tips} len={this.state.len}/>
      </div>
    );
  }
}

export default App;
