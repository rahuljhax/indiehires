import CustomDropdown from "@/app/components/common/FormComponents/CustomDropdown/CustomDropdown";
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomTextarea from "@/app/components/common/FormComponents/CustomTextarea/CustomTextarea";
import React from "react";
import styles from './CompanyDetails.module.css'
import EditIcon from "@/assets/icons/EditIcon";
const CompanyDetails = () => {
    return (
        <div className={styles.companyDetailsContainer}>
            <div className="title">Company details</div>
            <div className={styles.titleWithEdit}>
                <div className="subTitle">Update company details to provide candidates with better insights.</div>
                <span className={styles.editIcon}>
                    <EditIcon width={22} height={22} />
                </span>
            </div>
            <div className="form">
                <CustomInput
                    label="Company Name"
                    placeholder="InfoTech"
                    required
                />
                <CustomDropdown
                    label="Industry"
                    placeholder="IT & Tech"
                    required
                />
                <CustomInput
                    label="Company Website"
                    required
                    placeholder="https://c3hglobal.com/"
                />
                <div className="row">
                    <CustomInput
                        label="Founded"
                        required
                        placeholder="e.g. 2022"
                    />
                    <CustomDropdown
                        label="Company Size"
                        placeholder="0-10"
                        required
                    />
                </div>
                <CustomTextarea
                    label="About Company"
                    required
                    placeholder="About company..."
                />
                <div className="title">Billing Address</div>
                <div className="row">
                    <CustomDropdown
                        label="Country"
                        placeholder="USA"
                        required
                    />
                    <CustomDropdown
                        label="State"
                        placeholder="California"
                        required
                    />
                </div>
                <div className="row">
                    <CustomInput
                        label="City"
                        required
                        placeholder="New York"
                    />
                    <CustomInput
                        label="Postal/ZIP Code"
                        required
                        placeholder="07008"
                    />

                </div>
                <CustomInput
                    label="Street Address"
                    required
                    placeholder="Address line 1..."
                />
                <CustomInput
                    label="Apartment/Suite/Unit"
                    required
                    placeholder="Address line 2..."
                />
            </div>
        </div>
    )
}

export default CompanyDetails;