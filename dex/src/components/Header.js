import React from 'react'

function Header() {
  return (
    <div>Header</div>
  )
}

export default Header

import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";

function Header(props) {

  const {address, isConnected, connect} = props;

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <div className="headerItem">Swap</div>
        <div className="headerItem">Tokens</div>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}
