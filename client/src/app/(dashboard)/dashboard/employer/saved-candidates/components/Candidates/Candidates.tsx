import SearchBox from "@/app/components/common/FormComponents/SearchBox/SearchBox";
import React from "react";
import styles from './Candidates.module.css'
import ListItem from "../ListItem/ListItem";
const Candidates = () => {
    return (
        <section>
            <div className={styles.top}>
                <div className="title">Saved Candidates</div>
                <SearchBox />
            </div>
            <div className={styles.candidateList}>
                <ListItem />
            </div>
        </section>
    )
}
export default Candidates;