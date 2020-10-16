import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Login";
import Chat from "./components/Chat";
import Singup from './components/Singup';

export default function Routes() { 
  return(
    <Switch>
      <Route exact path = '/'      component={Chat} />
      <Route exact path = '/login' component={Login} />
      <Route exact path = '/singup'component={Singup} />
    </Switch>
  )
}