import React from "react";
import styles from './BillingHistory.module.css'
import Link from "next/link";
import LockIcon from "@/assets/icons/LockIcon";
const BillingHistory = () => {
    return (
        <div className={styles.billingContainer}>
            <table className={styles.candidates}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>April 15, 2025</td>
                        <td>Basic Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><Link className={styles.downloadLink} href={'#'}>Download</Link></td>
                    </tr>
                    <tr>
                        <td>April 15, 2025</td>
                        <td>Basic Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><Link className={styles.downloadLink} href={'#'}>Download</Link></td>
                    </tr>
                    <tr>
                        <td>April 15, 2025</td>
                        <td>Basic Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><Link className={styles.downloadLink} href={'#'}>Download</Link></td>
                    </tr>
                    <tr>
                        <td>April 15, 2025</td>
                        <td>Basic Plan - Monthly</td>
                        <td>$29.00</td>
                        <td><Link className={styles.downloadLink} href={'#'}>Download</Link></td>
                    </tr>
                </tbody>
            </table>
            <div className="title">Payment Method</div>
            <table className={styles.candidates}>
                <thead>
                    <tr>
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>Expiration Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className={styles.cardName}>MASTERCARD</span></td>
                        <td>
                            <div className={styles.cardNumber}>**** 5100<LockIcon width={12} height={12} /></div>
                        </td>
                        <td>Expires 05/2028</td>
                        <td><button className={styles.defaultbutton}>Set as Default</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BillingHistory;