'use client';
import React, { useState } from "react";
import styles from './CancelSubscription.module.css';
import CustomRadio from "@/app/components/common/FormComponents/CustomRadio/CustomRadio";
import CustomTextarea from "@/app/components/common/FormComponents/CustomTextarea/CustomTextarea";
import Button from "@/app/components/common/Button/Button";
const options = [
    { label: 'Too expensive', value: 'Too expensive' },
    { label: 'Not using it enough', value: 'Not using it enough' },
    { label: 'Switching to another platform', value: 'Switching to another platform' },
    { label: 'Features not useful', value: 'Features not useful' },
    { label: 'Other', value: 'Other' },
]
interface CancelSubscriptionProps {
    onClick: (value: boolean) => void;
}
const CancelSubscription = ({ onClick }: CancelSubscriptionProps) => {
    const [selectedOption, setSelectedOption] = useState<string>('Too expensive');
    const [showReasonForm, setShowReasonForm] = useState(true);
    return (
        <div className={styles.cancelContainer}>
            <div className={styles.titleWithSubtitle}>
                <div className="title">{showReasonForm ? 'Why are you leaving?' : 'Cancel Subscription'}</div>
                <div className="subTitle">{showReasonForm ? 'Your feedback helps us improve our service.' : "We're sorry to see you go. Please confirm if you want to cancel your subscription."}</div>
            </div>
            {showReasonForm && <>
                <div className={styles.inputContainer}>
                    <CustomRadio
                        vertical
                        value={selectedOption}
                        options={options}
                        onChange={setSelectedOption}
                    />
                </div>
                <CustomTextarea
                    placeholder="Please share any additional feedback (optional)"
                />
            </>}
            <div className={styles.alert}>
                {showReasonForm ? "You'll lose access to all features" : "Your subscription will remain active until June 19, 2025"}
            </div>
            <div className={styles.actions}>
                <Button style="grey" onClick={() => onClick(false)} buttonText="Back" />
                <Button
                    style="red"
                    buttonText="Confirm Cancellation"
                    onClick={() => {
                        if (showReasonForm) {
                            setShowReasonForm(false);
                        } else {
                            onClick(true);
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default CancelSubscription;