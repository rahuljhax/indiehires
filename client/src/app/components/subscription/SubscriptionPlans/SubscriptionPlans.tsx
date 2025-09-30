'use client';
import React, { useState } from "react";
import styles from './SubscriptionPlans.module.css'
import Status from "@/app/components/common/Status/Status";
import Button from "@/app/components/common/Button/Button";
import clsx from "clsx";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import Modal from "@/app/components/common/Modal/Modal";
import CancelSubscription from "../CancelSubscription/CancelSubscription";
const SubscriptionPlans = () => {
    const [activeBillingTab, setActiveBillingTab] = useState('yearly');
    const [wantToCancel, setWantToCancel] = useState(false);
    return (
        <>
            <div className={styles.subscriptionPlans}>
                <div className="title">Current Plan</div>
                <div className={styles.planCancelledAlert}>
                    <p>Your subscription has been cancelled.</p>
                    <p>Your Basic plan benefits remain active until June 19, 2025. Renew or upgrade before then to maintain continuous access.</p>
                </div>
                <div className={styles.currentPlan}>
                    <div className={styles.currentPlanBox}>
                        <div className={styles.planContent}>
                            <p>Premium (Agency) <Status /></p>
                            <p>Renews on Jul 16, 2025</p>
                        </div>
                        <div className={styles.planPrice}>
                            <p><span>$149.99</span> / month</p>
                            <Button onClick={() => setWantToCancel(true)} style="grey" buttonText="Cancel Subscription" />
                        </div>
                    </div>
                </div>
                <div className="availablePlans">
                    <div className={styles.plansTopBox}>
                        <div className="title">Available Plans</div>
                        <div className={styles.billingToggleBox}>
                            <div className={styles.planText}>Save 20% with Annual Billing</div>
                            <ul className={styles.billingToggle}>
                                <li onClick={() => setActiveBillingTab('monthly')} className={clsx(activeBillingTab === 'monthly' && styles.active)}>Monthly</li>
                                <li onClick={() => setActiveBillingTab('yearly')} className={clsx(activeBillingTab === 'yearly' && styles.active)}>Yearly</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.plans}>
                        <SubscriptionCard />
                        <SubscriptionCard />
                        <SubscriptionCard />
                    </div>
                </div>
            </div>

            <Modal isOpen={wantToCancel} onClose={() => setWantToCancel(false)}>
                <CancelSubscription onClick={setWantToCancel} />
            </Modal>
        </>
    )
}
export default SubscriptionPlans;