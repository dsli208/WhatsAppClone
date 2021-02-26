import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <Router>
          <Switch>
            
            <Sidebar />
            <Router path="/rooms/:roomid"> <Chat /> </Router>
            <Router path="/"> <Chat /></Router>
            
          </Switch>
        
        </Router>
      </div>
      )}    
    </div>
  );
}

export default App;
