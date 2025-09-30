import React from "react";
import styles from './SubscriptionCard.module.css'
import CheckIcon from "@/assets/icons/CheckIcon";
import Button from "@/app/components/common/Button/Button";
const SubscriptionCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>Premium (Agency)</div>
            <div className={styles.planDesc}>Ideal for: Companies with high-volume hiring or those needing extra support.</div>
            <div className={styles.pricingBilling}>
                <p><span>$149.99</span>/monthly</p>
                <p>Billed monthly</p>
            </div>
            <ul className={styles.benefits}>
                <li><span><CheckIcon width={14} height={14} /></span>Job Postings: Up to 10 active job posts at a time.</li>
                <li><span><CheckIcon width={14} height={14} /></span>Visibility: All job posts are featured for maximum visibility on the platform.</li>
                <li><span><CheckIcon width={14} height={14} /></span>Candidates: Unlimited candidate applications.</li>
                <li><span><CheckIcon width={14} height={14} /></span>Employer Branding: Premium branding</li>
                <li><span><CheckIcon width={14} height={14} /></span>Support: Premium support (dedicated account manager and phone support).</li>
                <li><span><CheckIcon width={14} height={14} /></span>1-on-1 Recruitment Assistance: Included – dedicated C3H recruiter support (job description consultation, candidate shortlisting, and one assisted hire per subscription period).</li>
            </ul>
            <Button buttonText="Upgrade Plan" style="darkblue" />
        </div>
    )
}
export default SubscriptionCard;