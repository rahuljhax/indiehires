import React from "react";
import styles from './page.module.css'
import JobDetails from "./components/JobDetails/JobDetails";
import QualificationRequirements from "./components/QualificationRequirements/QualificationRequirements";
import AddMedia from "./components/AddMedia/AddMedia";
import SeoMetaData from "./components/SeoMetaData/SeoMetaData";
import AdditionalFields from "./components/AdditionalFields/AdditionalFields";
const page = () => {
    return (
        <section>
            <div className="title">Post a New Job</div>
            <main className={styles.main}>
                <div className={styles.box}>
                    <JobDetails />
                    <QualificationRequirements />
                </div>
                <div className={styles.box}>
                    <AddMedia />
                    <SeoMetaData />
                    <AdditionalFields />
                </div>
            </main>
        </section>
    )
}
export default page;