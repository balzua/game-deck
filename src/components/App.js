import React  from 'react';
import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions';
import Header from './header';
import Footer from './footer';
import Library from './library';
import Landing from './landing';
import Modal from './modal';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export class App extends React.Component {
  
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
  
  render() {
    return (
      // Render the basic header and footer.
      // Have a Router to determine whether to Render Library or Recommendations
      <Router>
        <div className="app">
          <Modal />
          <Header />
          <Switch>
            <Route exact path='/library' component={Library} />
            <Route path='/' component={Landing} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.app.authentication.user,
  hasAuthToken: state.app.authentication.authToken
})

export default connect(mapStateToProps)(App);
