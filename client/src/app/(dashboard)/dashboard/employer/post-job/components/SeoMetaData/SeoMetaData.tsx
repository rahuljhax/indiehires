import React from "react";
import styles from './SeoMetaData.module.css'
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import CustomTextarea from "@/app/components/common/FormComponents/CustomTextarea/CustomTextarea";
const SeoMetaData = () => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>SEO & Metadata</div>
            <div className={styles.subTitle}>Enhance job visibility with SEO details</div>
            <div className="form">
                <CustomInput
                    label="SEO Title"
                    placeholder="SEO Title"
                />
                <CustomInput
                    label="Focus Keyphrase"
                    placeholder="SEO Focus keyword"
                />
                <CustomTextarea
                    label="Focus Keyphrase"
                    placeholder="SEO Focus keyword"
                />
            </div>
        </div>
    )
}
export default SeoMetaData;