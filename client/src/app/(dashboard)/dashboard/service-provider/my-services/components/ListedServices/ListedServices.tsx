'use client';
import React, { useState } from 'react'
import styles from './ListedServices.module.css'
import ServiceCard from '@/app/components/common/ServiceCard/ServiceCard';
import Tabs from '@/app/(dashboard)/dashboard/employer/my-profile/components/Tabs/Tabs';
const ListedServices = () => {
    const [activeTab, setActiveTab] = useState('Listed Services(2)');
    return (
        <section>
            <Tabs activeTab={activeTab} onClick={setActiveTab} tabsName={['Listed Services(2)', 'Draft(0)']} />
            <div className={styles.serviceBoxes}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </section>
    )
}

export default ListedServices