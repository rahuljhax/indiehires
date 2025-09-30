import LeftArrowIcon from '@/assets/icons/LeftArrowIcon'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
const page = () => {
    return (
        <section>
            <div className={styles.top}>
                <Link href={'/dashboard/service-provider/my-services'}><LeftArrowIcon width={18} height={18} /></Link>
                <div className="title">My Services</div>
            </div>
        <ServiceDetails/>
        </section>
    )
}

export default page