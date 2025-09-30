import React from 'react'
import DashboardStats from './components/DashboardStats/DashboardStats'
import DashboardListings from './components/DashboardListings/DashboardListings'
const page = () => {
    return (
        <>
            <DashboardStats />
            <DashboardListings />
        </>
    )
}

export default page