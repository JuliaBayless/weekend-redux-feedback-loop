import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/admin">
          <Admin />
        </Route>

  
    </div>
    </Router>
  );
}

export default App;
