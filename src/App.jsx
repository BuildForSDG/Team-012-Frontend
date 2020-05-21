import React from 'react';
import './App.scss';
// import { Button } from 'reactstrap';
import MenuBarComponent from './components/navbar/navbar.jsx';
import LandingPage from './pages/landing/landing.jsx';
import FooterComponent from './components/footer/footer.jsx';

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
        <FooterComponent />
    </div>
  );
}

export default App;