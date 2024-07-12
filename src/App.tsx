import React from 'react';
import "./App.css";
import HotWallet from './store/HotWallet';
import { observer } from 'mobx-react-lite';

const App = observer(() => {

  // TODO : Return loader
  if (!HotWallet.here) return null;

  // Check if user authorised
  if (!HotWallet.user) {
    return (
      <div>
          <h1>Auth</h1>
          <button onClick={HotWallet.login}>Connect wallet</button>
      </div>
    );
  }

  return(
    <div>
        <h1>Hello {HotWallet.user.nearAccountId}</h1>
        <button onClick={HotWallet.logout}>Logout</button>
    </div>
  )

})

export default App;
