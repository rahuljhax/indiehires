import React from 'react'
import styles from './ServiceListings.module.css'
import ServiceCard from '@/app/components/common/ServiceCard/ServiceCard'
const ServiceListings = () => {
    return (
        <div className={styles.listings}>
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
            <ServiceCard isUserServiceCard />
        </div>
    )
}

export default ServiceListings