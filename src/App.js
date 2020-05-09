import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContextProvider from './aut/userContext/userContext'
import Home from './home/home'
import Splash from './splash/splash'
import Login from './aut/login/login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
       
      <div className="App"></div>

      <UserContextProvider>
        <Switch >
          {/* //tip to use Context for just specific route you can use /prrrrro_router/routerWithContext.js istead of <Router/> */}
          <Route exact  path="/" component={Splash}/>
          <Route exact  path="/home" component={Home}/>       
          <Route exact  path="/login" component={Login}/>       
        </Switch>
      </UserContextProvider>

    </BrowserRouter>
  );
}

export default App;
