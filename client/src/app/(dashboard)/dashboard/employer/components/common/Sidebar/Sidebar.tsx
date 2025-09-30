'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Sidebar.module.css';
import DashboardIcon from "@/assets/icons/DashboardIcon";
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import PostJobIcon from "@/assets/icons/PostJobIcon";
import MySubscriptionIcon from "@/assets/icons/MySubscriptionIcon";
import MyProfileIcon from "@/assets/icons/MyProfileIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";


const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={styles.sidePanel}>
            <Image className={styles.logo} width={304} height={74} src='/assets/images/logo.png' alt="Logo" />
            <ul className={styles.navLinks}>
                <li><Link href={"/dashboard/employer"} className={clsx(styles.link, pathname === '/dashboard/employer' && styles.activeLink)}><DashboardIcon width={22} height={22} />Dashboard</Link></li>
                <li><Link href={'/dashboard/employer/my-jobs'} className={clsx(styles.link, pathname === '/dashboard/employer/my-jobs' && styles.activeLink)}><MyJobsIcon width={22} height={22} />My Jobs</Link></li>
                <li><Link href={'/dashboard/employer/saved-candidates'} className={clsx(styles.link, pathname === '/dashboard/employer/saved-candidates' && styles.activeLink)}><BookmarkIcon width={22} height={22} />Saved Candidates</Link></li>
                <li><Link href={'/dashboard/employer/post-job'} className={clsx(styles.link, pathname === '/dashboard/employer/post-job' && styles.activeLink)}><PostJobIcon width={22} height={22} />Post a New Job</Link></li>
                <li><Link href={'/dashboard/employer/my-subscription'} className={clsx(styles.link, pathname === '/dashboard/employer/my-subscription' && styles.activeLink)}><MySubscriptionIcon width={22} height={22} />My Subscription</Link></li>
                <li><Link href={'/dashboard/employer/my-profile'} className={clsx(styles.link, pathname === '/dashboard/employer/my-profile' && styles.activeLink)}><MyProfileIcon width={22} height={22} />My Profile</Link></li>
            </ul>
            <button className={styles.logout}><LogoutIcon width={22} height={22} />Logout</button>
        </div>
    )
}
export default Sidebar;