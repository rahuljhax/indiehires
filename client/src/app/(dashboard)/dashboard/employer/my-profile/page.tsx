import React from "react";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
const page = () => {
    return (
        <section>
            <div className="title">My Profile</div>
            <div className="subTitle">Manage your personal and company&apos;s information.</div>
            <ProfileContainer />
        </section>
    )
}
export default page;