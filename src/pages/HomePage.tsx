import React from "react";
import HotWallet from "../store/HotWallet";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
    return (
        <div>
            <h1>Hello {HotWallet!.user!.nearAccountId}</h1>
            <button onClick={HotWallet.logout}>Logout</button>
        </div>
      );
})

export default AuthPage;