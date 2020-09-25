import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTips from './components/AddTip';
import Tips from './components/Tips';
import './App.css';

class App extends Component {
    state = {
      tips: [],
      len: 0,
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
      tips: [...this.state.tips, newTip],
      len: this.len + 1
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Route exact path="/">
              <br/>
              <AddTips addTip={this.addTip}/>
              <br/>
              <Tips tips={this.state.tips} len={this.state.len}/>
            </Route>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
