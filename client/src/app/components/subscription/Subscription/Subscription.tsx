'use client'
import React, { useState } from "react";
import styles from './Subscription.module.css'
import SubscriptionPlans from "../SubscriptionPlans/SubscriptionPlans";
import BillingHistory from "../BillingHistory/BillingHistory";
import Tabs from "@/app/(dashboard)/dashboard/employer/my-profile/components/Tabs/Tabs";
const Subscription = () => {
    const [activeTab, setActiveTab] = useState('Subscription Plans');
    return (
        <div className={styles.subscriptionContainer}>
            <Tabs activeTab={activeTab} onClick={setActiveTab} tabsName={['Subscription Plans', 'Billing History']} />
            {activeTab === 'Subscription Plans' ? <SubscriptionPlans /> : <BillingHistory />}
        </div>
    )
}
export default Subscription;