import React from 'react'
import styles from './ServiceCard.module.css'
import Image from "next/image";
import LocationIcon from "@/assets/icons/LocationIcon";
import LanguageIcon from "@/assets/icons/LanguageIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ThreeDot from "@/assets/icons/ThreeDot";
import Link from 'next/link';
import BookmarkIcon from '@/assets/icons/BookmarkIcon';
interface ServiceCardProps {
    isUserServiceCard?: boolean;
}
const ServiceCard = ({ isUserServiceCard }: ServiceCardProps) => {
    return (
        <div className={styles.serviceCard}>
            <Image
                src={'/assets/images/serviceCardImage.png'}
                width={345}
                height={194}
                alt="ServiceImage"
                className={styles.serviceImage}
            />
            <div className={styles.serviceContent}>
                <div className={styles.top}>
                    <Image
                        src={'/assets/images/userprofile.png'}
                        width={42}
                        height={42}
                        alt="ServiceImage"
                        className={styles.profileImage}
                    />
                    <div className={styles.userContent}>
                        <span className={styles.name}>John Smith</span>
                        <span className={styles.profession}>Full Stack Developer</span>
                    </div>
                </div>
                <div className={styles.middle}>
                    <ul className={styles.locationLanguage}>
                        <li><LocationIcon width={12} height={12} />Los Angeles, USA</li>
                        <li><LanguageIcon width={12} height={12} />English</li>
                    </ul>
                    <p className={styles.seriveName}>Advanced SEO Strategies for Higher Rankings</p>
                    <ul className={styles.highlights}>
                        <li><span><CheckIcon width={10} height={10} /></span>Data-driven SEO strategies</li>
                        <li><span><CheckIcon width={10} height={10} /></span>Keyword research, and link-building</li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.price}>Starting From <span>$500/month</span></div>
                    <div className={styles.actions}>
                        <Link className={styles.viewDetails} href={'/dashboard/service-provider/my-services/details'}>View details</Link>
                        {!isUserServiceCard && <button><ThreeDot width={16} height={16} /></button>}
                    </div>
                </div>

            </div>
            {isUserServiceCard && <div className={styles.saveIcon}>
                <BookmarkIcon width={16} height={16} />
            </div>}
        </div>
    )
}

export default ServiceCard