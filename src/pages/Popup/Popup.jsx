import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import Capsule, { Modal, Environment } from '@usecapsule/web-sdk';

const capsule = new Capsule(Environment.BETA)

const Popup = () => {
  console.log("x")
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Modal capsule={capsule} isOpen={visible} onClose={() => { setVisible(false) }} />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <button onClick={() => { setVisible(true) }}>
          OPEN
        </button>
        <button onClick={async () => {
          const wallet = Object.keys(capsule.getWallets())[0]
          // console.log(x)
          const tx = await capsule.sendTransaction(wallet, "6YCFF0h26ACCUgiUQsmnLJ38ySyuDelRAWDOotonr5GF6NSlEACAgICA", "1")
          console.log(tx)
        }}>
          SEND
        </button>
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
