'use client';
import React, { ChangeEvent, useState } from "react";
import styles from './JobDetails.module.css'
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomDropdown from "@/app/components/common/FormComponents/CustomDropdown/CustomDropdown";
import TextEditor from "@/app/components/common/FormComponents/TextEditor/TextEditor";
import CustomRadio from "@/app/components/common/FormComponents/CustomRadio/CustomRadio";
import CustomCheckbox from "@/app/components/common/FormComponents/CustomCheckbox/CustomCheckbox";
const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
]
const JobDetails = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('yes');
    const [checkboxes, setCheckboxes] = useState({
        hideSalary: false,
        remote: false,
        urgent: false
    });

    const checkBoxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCheckboxes((prev) => ({
            ...prev,
            [name]: checked
        }))
    }
    return (
        <div className={styles.box}>
            <div className={styles.title}>Job details</div>
            <div className={styles.subTitle}>Provide the basic information about the job</div>
            <div className='form'>
                <CustomInput
                    label="Job Title"
                    required
                    placeholder="e.g. DevOps Engineer"
                />
                <CustomDropdown
                    label="Job Category"
                    required
                    placeholder="Select Job Category"
                />
                <TextEditor
                    label="Job Description"
                    value={jobDescription}
                    onChange={setJobDescription}
                    required
                />
                <CustomDropdown
                    label="Job Type"
                    required
                    placeholder="Select..."
                />
                <div className='row'>
                    <CustomDropdown
                        label="Country"
                        required
                        placeholder="Select..."
                    />
                    <CustomDropdown
                        label="City"
                        required
                        placeholder="Select..."
                    />
                </div>
                <div className={styles.salaryRange}>
                    <div className={styles.label}>Salary Range<span> *</span></div>
                    <div className={styles.salaryInputs}>
                        <CustomDropdown
                            placeholder="Select Currency.."
                        />
                        <CustomInput
                            placeholder="$ minimum"
                        />
                        <CustomInput
                            placeholder="$ maximum"
                        />
                    </div>
                </div>
                <div className={styles.checkBoxes}>
                    <CustomCheckbox
                        label="Hide salary from job posting"
                        value={checkboxes.hideSalary}
                        name="hideSalary"
                        onChange={checkBoxChangeHandler}
                    />
                    <CustomCheckbox
                        label="Remote"
                        value={checkboxes.remote}
                        name="remote"
                        onChange={checkBoxChangeHandler}
                    />
                    <CustomCheckbox
                        label="Urgent"
                        value={checkboxes.urgent}
                        name="urgent"
                        onChange={checkBoxChangeHandler}
                    />
                </div>
                <CustomRadio
                    label="Should the candidate apply on the C3H Global site?"
                    value={selectedOption}
                    options={options}
                    onChange={setSelectedOption}
                />
                {selectedOption === 'no' && <CustomInput
                    placeholder="Enter Website url"
                    required
                />}
            </div>
        </div>
    );
};
export default JobDetails;
