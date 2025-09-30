'use client';
import React, { useState } from "react";
import styles from './QualificationRequirements.module.css'
import CustomDropdown from "@/app/components/common/FormComponents/CustomDropdown/CustomDropdown";
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomTagInput from "@/app/components/common/FormComponents/CustomTagInput/CustomTagInput";
import Datepicker from "@/app/components/common/FormComponents/Datepicker/Datepicker";
const QualificationRequirements = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
        <div className={styles.box}>
            <div className={styles.title}>Qualifications and Requirements</div>
            <div className={styles.subTitle}>Specify required education</div>
            <div className='form'>
                <div className='row'>
                    <CustomDropdown
                        label="Education Level"
                        required
                        placeholder="Select..."
                    />
                    <CustomDropdown
                        label="Gender Preference (if any)"
                        placeholder="Select..."
                    />
                </div>
                <div className={styles.row}>
                    <CustomInput
                        label="Experience Required (in years)"
                        placeholder="Select..."
                    />
                    <CustomDropdown
                        label="Experience Level"
                        required
                        placeholder="Select..."
                    />
                </div>
                <CustomTagInput
                    value={skills}
                    onChange={setSkills}
                    label="Skills Needed"
                    required
                    placeholder="Press Enter to add a skill"
                />
                <Datepicker
                    label="Expiration Date"
                    required
                    placeholder="Select Date"
                    onChange={setStartDate}
                    value={startDate}
                />
            </div>
        </div>
    )
}
export default QualificationRequirements;