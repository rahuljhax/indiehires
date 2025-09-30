import React from 'react'
import styles from './StepTracker.module.css'
import Button from '@/app/components/common/Button/Button'
import CheckIcon from '@/assets/icons/CheckIcon'
const StepTracker = () => {
    return (
        <div className={styles.stepTracker}>
            <ul className={styles.steps}>
                {/* <li><span><CheckIcon width={12} height={12} /></span>About Service</li>
                <li><span><CheckIcon width={12} height={12} /></span>Images & Videos</li>
                <li><span><CheckIcon width={12} height={12} /></span>Pricing</li>
                <li><span><CheckIcon width={12} height={12} /></span>FAQs (Optional)</li> */}
            </ul>
            <div className={styles.actions}>
                <Button width='auto' style='grey' buttonText='Save as Draft' />
                <Button width='auto' style='skyblue' buttonText='Publish Service' />
            </div>
        </div>
    )
}

export default StepTracker