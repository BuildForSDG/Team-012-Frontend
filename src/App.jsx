import React from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import NavBarComponent from './components/navbar/navbar.jsx';

function App() {
  return (
    <div className="app">
      <NavBarComponent />
      <header className="app">
      <p>What he Do??</p>
      </header>

      <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>

        <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;