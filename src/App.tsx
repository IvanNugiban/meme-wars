import React from 'react';
import "./App.css";
import HotWallet from './store/HotWallet';
import { observer } from 'mobx-react-lite';
import RootRouter from './navigation/RootRouter';
import Loader from './ui/Loader';

const App = observer(() => {

  // TODO : Return loader
  if (!HotWallet.here) return <Loader />;

  return(
    <div>
        <main>
          <RootRouter/>
        </main>
    </div>
  )

})

export default App;
