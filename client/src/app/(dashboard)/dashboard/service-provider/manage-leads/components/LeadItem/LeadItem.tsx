'use client'
import React, { useState } from "react";
// import RightArrowIcon from "@/assets/icons/RightArrowIcon";
import styles from './LeadItem.module.css'
import DownArrowIcon from "@/assets/icons/DownArrowIcon";
import Modal from "@/app/components/common/Modal/Modal";
const LeadItem = () => {
    const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
    return (
        <>
            <div className={styles.listItem}>
                <div className={styles.listContent}>
                    <div className={styles.jobTitle}>App Development Services</div>
                    <div className={styles.action}>
                        <DownArrowIcon width={20} height={20} />
                        {/* <RightArrowIcon width={20} height={20} /> */}
                    </div>
                </div>
                <table className={styles.candidates}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chandan Ray</td>
                            <td>chandanray.digilantern@gmail.com</td>
                            <td>+1234567890</td>
                            <td>22-04-2025</td>
                            <td>
                                <button onClick={() => setSelectedMessage('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quo, sint debitis quaerat officia nulla eveniet totam, rerum inventore beatae repellendus optio possimus veritatis doloribus! Similique veniam alias labore sint.')} className={styles.actionButton}>View Message</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {selectedMessage && <Modal isOpen={true} onClose={() => setSelectedMessage(null)}>
                <div className={styles.previewMessage}>
                    <div className="title">Message</div>
                    <p className={styles.leadMessage}>{selectedMessage}</p>
                </div>
            </Modal>}
        </>
    )
}
export default LeadItem;