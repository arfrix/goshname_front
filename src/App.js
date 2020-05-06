import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Splash from './splash/splash'
import Login from './login/login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
       
      <div className="App">

      </div>

      <Switch >
        <Route exact  path="/" component={Splash}/>
        <Route exact  path="/home" component={Home}/>       
        <Route exact  path="/login" component={Login}/>       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
