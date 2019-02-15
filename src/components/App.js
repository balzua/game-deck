import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Library from './library';
import Landing from './landing';
import Modal from './modal';
import Recommendations from './recommendations';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      // Render the basic header and footer.
      // Have a Router to determine whether to Render Library or Recommendations
      <Router>
        <div className="app">
          <Modal content="test" />
          <Header />
          <Switch>
            <Route exact path='/library' component={Library} />
            <Route exact path='/recommendations' component={Recommendations} />
            <Route path='/' component={Landing} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
