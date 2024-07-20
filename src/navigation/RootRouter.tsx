import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { observer } from "mobx-react-lite";
import HotWallet from "../store/HotWallet";
import Loader from "../ui/Loader";

const AuthPage = React.lazy(() => import("../pages/AuthPage"));
const VotePage = React.lazy(() => import("../pages/VotePage"));
const SubmitPage = React.lazy(() => import("../pages/SubmitPage"));
const LeaderboardPage = React.lazy(() => import("../pages/LeaderboardPage"));

const RootRouter = observer(() => {

    return (<Routes>
        
  // Check if user authorised
        {HotWallet.user ? 
        <React.Fragment>
            <Route path="/" element={<React.Suspense fallback={<Loader/>}><VotePage/></React.Suspense>}/>
            <Route path="/submit" element={<React.Suspense fallback={<Loader/>}><SubmitPage/></React.Suspense>}/>
            <Route path="/leaderboard" element={<React.Suspense fallback={<Loader/>}><LeaderboardPage/></React.Suspense>}/>
        </React.Fragment> 
        : 
        <React.Fragment>
            <Route path="/" element={<React.Suspense><AuthPage/></React.Suspense>}/>
            <Route path="*" element={<Navigate replace to={'/'}/>}/>
        </React.Fragment>}
    </Routes>)
})

export default RootRouter;