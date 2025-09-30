'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Sidebar.module.css';
import DashboardIcon from "@/assets/icons/DashboardIcon";
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import MyProfileIcon from "@/assets/icons/MyProfileIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";
import SettingIcon from "@/assets/icons/SettingIcon";


const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={styles.sidePanel}>
            <Image className={styles.logo} width={304} height={74} src='/assets/images/logo.png' alt="Logo" />
            <ul className={styles.navLinks}>
                <li><Link href={"/dashboard/user"} className={clsx(styles.link, pathname === '/dashboard/user' && styles.activeLink)}><DashboardIcon width={22} height={22} />Dashboard</Link></li>

                <li><Link href={'/dashboard/user/applied-jobs'} className={clsx(styles.link, pathname === '/dashboard/user/applied-jobs' && styles.activeLink)}><MyJobsIcon width={22} height={22} />Applied Jobs</Link></li>

                <li><Link href={'/dashboard/user/saved-jobs'} className={clsx(styles.link, pathname === '/dashboard/user/saved-jobs' && styles.activeLink)}><BookmarkIcon width={22} height={22} />Saved Jobs</Link></li>

                <li><Link href={'/dashboard/user/saved-services'} className={clsx(styles.link, pathname === '/dashboard/user/saved-services' && styles.activeLink)}><BookmarkIcon width={22} height={22} />Saved Services</Link></li>

                <li><Link href={'/dashboard/user/my-profile'} className={clsx(styles.link, pathname === '/dashboard/user/my-profile' && styles.activeLink)}><MyProfileIcon width={22} height={22} />My Profile</Link></li>

                <li><Link href={'/dashboard/user/settings'} className={clsx(styles.link, pathname === '/dashboard/user/settings' && styles.activeLink)}><SettingIcon width={22} height={22} />Settings</Link></li>

            </ul>
            <button className={styles.logout}><LogoutIcon width={22} height={22} />Logout</button>
        </div>
    )
}
export default Sidebar;