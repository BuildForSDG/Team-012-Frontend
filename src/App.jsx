import React from 'react';
import './App.scss';
// import { Button } from 'reactstrap';
import MenuBarComponent from './components/navbar/navbar.jsx';
import LandingPage from './pages/landing/landing.jsx';

function App() {
  return (
    <div className="app">
      <MenuBarComponent />
      <LandingPage />
      <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Eliminating Hunger
        </a>
    </div>
  );
}

export default App;