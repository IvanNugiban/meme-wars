import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { observer } from "mobx-react-lite";
import HotWallet from "../store/HotWallet";
import AutorizedRoutes from "./AutorizedRoutes";

const AuthPage = React.lazy(() => import("../pages/AuthPage"));

const RootRouter = observer(() => {

    return (<Routes>
        
  // Check if user authorised
        {HotWallet.user ? <React.Fragment>
            <Route path="/*" element={<AutorizedRoutes/>}/>
            <Route path="*" element={<Navigate replace to={'/'}/>}/>
        </React.Fragment>
        : 
        <React.Fragment>
            <Route path="/" element={<React.Suspense><AuthPage/></React.Suspense>}/>
            <Route path="*" element={<Navigate replace to={'/'}/>}/>
        </React.Fragment>}
    </Routes>)
})

export default RootRouter;