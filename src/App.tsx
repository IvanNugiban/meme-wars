import React from 'react';
import "./App.css";
import HotWallet from './store/HotWallet';
import { observer } from 'mobx-react-lite';
import RootRouter from './navigation/RootRouter';
import Loader from './ui/Loader';
import Header from './ui/Header';
import Footer from './ui/Footer';

const App = observer(() => {

  // TODO : Return loader
  if (!HotWallet.here) return <Loader />;

  return(
    <div>
        {HotWallet.user && <Header/>}
        <main>
          <RootRouter/>
        </main>
        {HotWallet.user && <Footer/>}
    </div>
  )

})

export default App;
