import React from "react";
import styles from './SearchServices.module.css'
import SearchBox from "@/app/components/common/FormComponents/SearchBox/SearchBox";
const SearchServices = () => {
    return (
        <div className={styles.top}>
            <div className={styles.left}>
                <div className="title">Saved Services (7)</div>
            </div>
            <div className={styles.right}>
                <SearchBox />
            </div>
        </div>
    )
}

export default SearchServices;