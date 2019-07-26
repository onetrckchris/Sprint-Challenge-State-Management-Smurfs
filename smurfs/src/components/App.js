import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { addSmurf } from '../store/actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import Navbar from './Navbar';

import "./App.css";

class App extends Component {
  addSmurf = (smurf) => {
    this.props.addSmurf(smurf);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Smurfs} />
        <Route exact path="/add-smurf" render={(props) => (
          <SmurfForm {...props} addSmurf={this.addSmurf} />
        )} />
      </div>
    );
  }
}

export default connect(null, { addSmurf })(App);
