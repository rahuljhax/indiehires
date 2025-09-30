import React from "react";
import DashboardStats from "./components/DashboardStats/DashboardStats";
import RecentJobList from "./components/RecentJobList/RecentJobList";
const page = () => {
    return (
        <>
            <DashboardStats />
            <RecentJobList />
        </>
    )
}
export default page;