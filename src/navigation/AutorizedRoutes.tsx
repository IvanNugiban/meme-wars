
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from '../ui/AdminMenu';
import Loader from '../ui/Loader';
import axiosHelper from '../utils/axiosHelper';

const VotePage = React.lazy(() => import("../pages/VotePage"));
const SubmitPage = React.lazy(() => import("../pages/SubmitPage"));
const LeaderboardPage = React.lazy(() => import("../pages/LeaderboardPage"));

const AutorizedRoutes = () => {

    const [event, setEvent] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            const result = await axiosHelper.request("/events/getActive", "GET", {}, false);
            setEvent(result);
            setIsLoading(false);
        }
        setIsLoading(true);
        fetchEvent();
    }, [])

    if (isLoading) return <Loader />;

    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<React.Suspense fallback={<Loader />}><VotePage /></React.Suspense>} />
                <Route path="/submit" element={<React.Suspense fallback={<Loader />}><SubmitPage /></React.Suspense>} />
                <Route path="/leaderboard" element={<React.Suspense fallback={<Loader />}><LeaderboardPage event={event}/></React.Suspense>} />
            </Routes>

            {true && <AdminMenu/>}
        </React.Fragment>
    )
}

export default AutorizedRoutes