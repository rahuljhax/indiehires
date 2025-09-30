import React from 'react'
import Subscription from '../Subscription/Subscription'

const SubscriptionDashboard = () => {
    return (
        <section>
            <div className="title">Manage Subscriptions</div>
            <div className="subTitle">View and manage your subscription plans and billling information</div>
            <Subscription />
        </section>
    )
}

export default SubscriptionDashboard