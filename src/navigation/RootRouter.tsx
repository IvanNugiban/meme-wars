import React from "react";
import {Route, Routes} from "react-router-dom";
import { observer } from "mobx-react-lite";
import HotWallet from "../store/HotWallet";

const AuthPage = React.lazy(() => import("../pages/AuthPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));

const RootRouter = observer(() => {
    return (<Routes>
        
  // Check if user authorised
        {HotWallet.user ? 
        <React.Fragment>
            <Route path="/" element={<React.Suspense><HomePage/></React.Suspense>}/>
        </React.Fragment> 
        : 
        <React.Fragment>
            <Route path="/" element={<React.Suspense><AuthPage/></React.Suspense>}/>
        </React.Fragment>}
    </Routes>)
})

export default RootRouter;