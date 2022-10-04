
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Route>
      <div className="App">
      <Router>
            <Switch>
              <Route path = "/"/>
               <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               </header>
               <p>
                HELLO WORLD
               </p>
            </Switch>
          </Router>
        </div>
    </Route>
  );
}

export default App;
