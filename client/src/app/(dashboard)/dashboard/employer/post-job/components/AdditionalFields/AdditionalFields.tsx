'use client';
import React, { useState } from "react";
import styles from './AdditionalFields.module.css'
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomTextarea from "@/app/components/common/FormComponents/CustomTextarea/CustomTextarea";
import CustomCheckbox from "@/app/components/common/FormComponents/CustomCheckbox/CustomCheckbox";
import Button from "@/app/components/common/Button/Button";
import Modal from "@/app/components/common/Modal/Modal";
import PreviewContainer from "../PreviewContainer/PreviewContainer";
const AdditionalFields = () => {
    const [isResumeRequired, setIsResumeRequired] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    return (
        <>
            <div className={styles.box}>
                <div className={styles.title}>Additional Fields</div>
                <div className={styles.subTitle}>Enhance job visibility with SEO details</div>
                <div className="form">
                    <CustomInput
                        label="Required Certifications"
                        placeholder="Mention here"
                    />
                    <CustomTextarea
                        label="Any Other Specific Details"
                        placeholder="Mention here"

                    />
                </div>
            </div>
            <div className={styles.formAction}>
                <CustomCheckbox
                    value={isResumeRequired}
                    onChange={(e) => setIsResumeRequired(e.target.checked)}
                    name="isResumeRequired"
                    label="Is Required Resume"
                />
                <Button onClick={() => setIsPreviewOpen(true)} buttonText="See Prview" style="grey" />
                <Button buttonText="Publish Job" style="skyblue" />
            </div>
            <Modal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
                <PreviewContainer />
            </Modal>
        </>
    )
}
export default AdditionalFields;