import React from "react";
import SearchIcon from "@/assets/icons/SearchIcon";
import styles from './SearchBox.module.css'
const SearchBox = () => {
    return (
        <div className={styles.searchBox}>
            <input type="text" placeholder="Search Job Title.." />
            <button className={styles.searchButton}>
                <SearchIcon width={20} height={20} />
            </button>
        </div>
    )
}
export default SearchBox;