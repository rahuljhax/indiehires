import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomRadio from "@/app/components/common/FormComponents/CustomRadio/CustomRadio";
import styles from './PersonalDetails.module.css'
import React, { useState } from "react";
import PhoneInput from "@/app/components/common/FormComponents/PhoneInput/PhoneInput";
import EditIcon from "@/assets/icons/EditIcon";
const options = [
    {
        label: 'Yes',
        value: 'yes'
    },
    {
        label: 'No',
        value: 'no'
    },
]
const PersonalDetails = () => {
    const [areYouHiringManager, setAreYouHiringManager] = useState('yes');
    return (
        <div className={styles.personalDetailsContainer}>
            <div className={styles.titleWithEdit}>
                <div className="subTitle">Update your personal information and contact details</div>
                <span className={styles.editIcon}>
                    <EditIcon width={22} height={22} />
                </span>
            </div>
            <div className="form">
                <CustomInput
                    label="Full Name"
                    placeholder="John"
                    required
                />
                <div className="row">
                    <CustomInput
                        label="Email Address"
                        placeholder="john.smith@example.com"
                        required
                    />
                    <PhoneInput
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <CustomRadio
                    label="Are You Hiring Manager?"
                    value={areYouHiringManager}
                    options={options}
                    onChange={setAreYouHiringManager}
                />
                <div className="row">
                    <CustomInput
                        label="Manager’s Name"
                        placeholder="John"
                        required
                    />
                    <CustomInput
                        label="Manager’s Last Name"
                        placeholder="Smith"
                        required
                    />
                </div>
                <PhoneInput
                    label="Manager’s Phone Number"
                    placeholder="Enter phone number"
                    required
                />
            </div>
        </div>
    )
}
export default PersonalDetails;