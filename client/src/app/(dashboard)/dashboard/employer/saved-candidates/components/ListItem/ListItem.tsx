import React from "react";
import RightArrowIcon from "@/assets/icons/RightArrowIcon";
import SavedIcon from "@/assets/icons/SavedIcon";
import Link from "next/link";
import DownloadIcon from "@/assets/icons/DownloadIcon";
import styles from './ListItem.module.css'
const ListItem = () => {
    return (
        <div className={styles.listItem}>
            <div className={styles.listContent}>
                <div className={styles.jobTitle}>Devops Engineer</div>
                <div className={styles.status}>Active</div>
                <div className={styles.expires}>Expires : 20/07/2025</div>
                <div className={styles.action}>
                    <RightArrowIcon width={20} height={20} />
                </div>
            </div>
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
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default ListItem;