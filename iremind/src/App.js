
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <Route>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" />
            <p>
              HELLO WORLD
            </p>
          </Routes>
        </BrowserRouter>
        <h1>test</h1>
      </div>
    </Route>
  );
}

export default App;
