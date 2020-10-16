import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import {CssBaseline} from '@material-ui/core';
import AppBar from './layout/AppBar';
import User from './components/User';

function App() {
  return (
    <Router>
      <CssBaseline/>
      <AppBar>
        <User/>
      </AppBar>
      <Routes/>
    </Router>
  );
}

export default App;
