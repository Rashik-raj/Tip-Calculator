import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import AddTips from './components/AddTip';
import Tips from './components/Tips';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    state = {
      tips: [],
      len: 0,
  }

  addTip = (amount, person_count) => {
    const newTip = {
      id: uuid(),
      amount: Number(amount).toFixed(2),
      person_count,
      tip: (Number(amount)*10/100).toFixed(2),
      total: (Number(amount) + (Number(amount)*10/100)).toFixed(2),
      total_per_person: ((Number(amount) + (Number(amount)*10/100)) / person_count).toFixed(2),
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
            <Switch>
              <Route exact path="/">
                <br/>
                <AddTips addTip={this.addTip}/>
                <br/>
                <Tips tips={this.state.tips} len={this.state.len}/>
              </Route>
              <Route path="" component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
