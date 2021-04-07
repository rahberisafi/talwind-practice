import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
   setIsOpen(!isOpen)
  }

  useEffect(() => {
   const hideMenu = () => {
     if (window.innerWidth > 768 && isOpen) {
       setIsOpen(false);
       console.log('its ok');
     }
   };

   window.addEventListener('resize', hideMenu);

   return () => {
     window.removeEventListener('resize', hideMenu);
   };
  });

  return (
     <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
     </>
  );
}

export default App;
