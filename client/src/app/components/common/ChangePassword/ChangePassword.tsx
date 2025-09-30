import React, { useState } from "react";
import styles from './ChangePassword.module.css'
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import Button from "@/app/components/common/Button/Button";
const ChangePassword = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    return (
        <div className={styles.changePasswordContainer}>
            <div>
                <div className="title">Security</div>
                <div className="subTitle">You can change your password here</div>
            </div>
            {!isFormActive && <div className={styles.changePasswordToggle}>
                <button onClick={() => setIsFormActive(true)}>Change Password</button>
            </div>}
            {
                isFormActive && <div className="form">
                    <CustomInput
                        type='password'
                        label="Current Password"
                        placeholder="Enter your current password"
                    />
                    <CustomInput
                        type='password'
                        label="New Password"
                        placeholder="Enter your new password"
                    />
                    <CustomInput
                        type='password'
                        label="Confirm New Password"
                        placeholder="Re-enter your new password"
                    />
                    <div className='row' style={{ justifyContent: 'flex-end' }}>
                        <Button width="auto" onClick={() => setIsFormActive(false)} style='grey' buttonText="Cancel" />
                        <Button width="auto" onClick={() => setIsFormActive(false)} style='skyblue' buttonText="Update Password" />
                    </div>
                </div>
            }
        </div >
    )
}
export default ChangePassword;