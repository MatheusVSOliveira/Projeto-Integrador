import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import SobreNos from './paginas/sobre-nos/SobreNos';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />

      <Switch>
        <div style={{ minHeight: "100vh" }}>
        <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/sobre-nos">
            <SobreNos/>
          </Route>
        </div>
      </Switch>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
