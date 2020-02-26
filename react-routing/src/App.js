import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'
import Profile from './components/Profile'
import UrlStuff from './components/UrlStuff'

import { Switch, Route, Redirect } from 'react-router-dom'


function App() {

  const isLoggedIn = false
  // const isLoggedIn = { username: 'Germantástico' }

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/experience" render={() => <Experience />} />
        <Route path="/education" render={() => <Education />} />
        <Route path="/profile" render={() =>
          isLoggedIn ? <Profile user={isLoggedIn} /> : <Redirect to="/" />
        } />



        {/* <Route path="/urlstuff/:clothe/:color" component={UrlStuff} /> */}
        <Route path="/urlstuff/:clothe/:color" render={match => <UrlStuff {...match} />} />

      </Switch>

    </div>
  );
}

export default App;
