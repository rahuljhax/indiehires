import React from "react";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "../components/common/JobCard/JobCard";
const page = () => {
    return (
        <section>
            <JobFilter />
            <div className="jobs">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </section>
    )
}

export default page; 