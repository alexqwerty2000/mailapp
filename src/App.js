import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import MailPage from './pages/MailPage';
import Feedback from './components/Feedback';

class App extends Component {

  render() {
    return (
      <>
      <Switch>
          <Route path='/mail/:id' render ={(props) => (< MailPage {...props} data='some data'/> )}/>
          <Route path='/contacts' component={ Contacts }/>
          <Route path='/dashboard' component={ Dashboard }/>
          <Route path='/feedback' component={Feedback}/>
      </Switch>
      </>
    );
  }
}

export default App;
