import React from "react";
import styles from './TotalApplicants.module.css'
import Link from "next/link";
import SavedIcon from "@/assets/icons/SavedIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";
const TotalApplicants = () => {
    return (
        <div className={styles.totlaApplicants}>
            <div className={styles.title}>Total Applicants <span>(24)</span></div>
            <table className={styles.candidates}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Applied</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chandan Ray</td>
                        <td>chandanray.digilantern@gmail.com</td>
                        <td>+1234567890</td>
                        <td>3 days ago</td>
                        <td>
                            <div className={styles.tableAction}>
                                <button className={styles.actionButton}><SavedIcon width={18} height={18} /></button>
                                <Link className={styles.actionButton} href={'#'}><DownloadIcon width={18} height={18} /></Link>
                            </div>
                        </td>
                    </tr><tr>
                        <td>Chandan Ray</td>
                        <td>chandanray.digilantern@gmail.com</td>
                        <td>+1234567890</td>
                        <td>3 days ago</td>
                        <td>
                            <div className={styles.tableAction}>
                                <button className={styles.actionButton}><SavedIcon width={18} height={18} /></button>
                                <Link className={styles.actionButton} href={'#'}><DownloadIcon width={18} height={18} /></Link>
                            </div>
                        </td>
                    </tr><tr>
                        <td>Chandan Ray</td>
                        <td>chandanray.digilantern@gmail.com</td>
                        <td>+1234567890</td>
                        <td>3 days ago</td>
                        <td>
                            <div className={styles.tableAction}>
                                <button className={styles.actionButton}><SavedIcon width={18} height={18} /></button>
                                <Link className={styles.actionButton} href={'#'}><DownloadIcon width={18} height={18} /></Link>
                            </div>
                        </td>
                    </tr><tr>
                        <td>Chandan Ray</td>
                        <td>chandanray.digilantern@gmail.com</td>
                        <td>+1234567890</td>
                        <td>3 days ago</td>
                        <td>
                            <div className={styles.tableAction}>
                                <button className={styles.actionButton}><SavedIcon width={18} height={18} /></button>
                                <Link className={styles.actionButton} href={'#'}><DownloadIcon width={18} height={18} /></Link>
                            </div>
                        </td>
                    </tr><tr>
                        <td>Chandan Ray</td>
                        <td>chandanray.digilantern@gmail.com</td>
                        <td>+1234567890</td>
                        <td>3 days ago</td>
                        <td>
                            <div className={styles.tableAction}>
                                <button className={styles.actionButton}><SavedIcon width={18} height={18} /></button>
                                <Link className={styles.actionButton} href={'#'}><DownloadIcon width={18} height={18} /></Link>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
export default TotalApplicants;