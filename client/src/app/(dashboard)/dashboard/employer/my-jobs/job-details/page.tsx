import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import React from "react";
import styles from './page.module.css'
import Link from "next/link";
import Details from "./components/Details/Details";
import SummaryInsights from "./components/SummaryInsights/SummaryInsights";
import TotalApplicants from "./components/TotalApplicants/TotalApplicants";
const page = () => {
    return (
        <section>
            <div className={styles.top}>
                <Link href={'/dashboard/employer/my-jobs'}><LeftArrowIcon width={18} height={18} /></Link>
                <div className="title">Job Details</div>
            </div>
            <main className={styles.mainLayout}>
                <div className={styles.left}>
                    <Details />
                </div>
                <div className={styles.right}>
                    <SummaryInsights />
                </div>
            </main>
            <TotalApplicants />
        </section>
    )
}
export default page;