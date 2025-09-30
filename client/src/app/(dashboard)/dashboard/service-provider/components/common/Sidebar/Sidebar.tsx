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
import LeadsIcon from "@/assets/icons/LeadsIcon";


const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={styles.sidePanel}>
            <Image className={styles.logo} width={304} height={74} src='/assets/images/logo.png' alt="Logo" />
            <ul className={styles.navLinks}>
                <li><Link href={"/dashboard/service-provider"} className={clsx(styles.link, pathname === '/dashboard/service-provider' && styles.activeLink)}><DashboardIcon width={22} height={22} />Dashboard</Link></li>

                <li><Link href={'/dashboard/service-provider/my-services'} className={clsx(styles.link, pathname === '/dashboard/service-provider/my-services' && styles.activeLink)}><MyJobsIcon width={22} height={22} />My Services</Link></li>

                <li><Link href={'/dashboard/service-provider/add-services'} className={clsx(styles.link, pathname === '/dashboard/service-provider/add-services' && styles.activeLink)}><PostJobIcon width={22} height={22} />Add Services</Link></li>

                <li><Link href={'/dashboard/service-provider/manage-leads'} className={clsx(styles.link, pathname === '/dashboard/service-provider/manage-leads' && styles.activeLink)}><LeadsIcon width={22} height={22} />Manage Leads</Link></li>

                <li><Link href={'/dashboard/service-provider/my-subscription'} className={clsx(styles.link, pathname === '/dashboard/service-provider/my-subscription' && styles.activeLink)}><MySubscriptionIcon width={22} height={22} />My Subscription</Link></li>

                <li><Link href={'/dashboard/service-provider/my-profile'} className={clsx(styles.link, pathname === '/dashboard/service-provider/my-profile' && styles.activeLink)}><MyProfileIcon width={22} height={22} />My Profile</Link></li>
            </ul>
            <button className={styles.logout}><LogoutIcon width={22} height={22} />Logout</button>
        </div>
    )
}
export default Sidebar;