import React from "react";
import HotWallet from "../store/HotWallet";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
    return (
        <div>
            <h1>Auth</h1>
            <button onClick={HotWallet.login}>Connect wallet</button>
        </div>
      );
})

export default AuthPage;