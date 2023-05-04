import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import Capsule, { Modal, Environment } from '@usecapsule/web-sdk';

const capsule = new Capsule(Environment.SANDBOX)

const Popup = () => {
  console.log("x")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Modal capsule={capsule} isOpen={true} onClose={() => {}} />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
