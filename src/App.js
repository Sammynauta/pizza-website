import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componentes/pages/Home';
import About from './componentes/pages/About';
import Menu from './componentes/pages/Menu';
import Contact from './componentes/pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/contact-us' exact component={Contact} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
