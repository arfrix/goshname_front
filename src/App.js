import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Splash from './splash/splash'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
       
      <div className="App">

      </div>

      <Switch >
        <Route exact  path="/" component={Splash}/>
        <Route exact  path="/landing" component={Home}/>       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
