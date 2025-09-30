'use client';
import React, { useState } from 'react'
import styles from './ServiceDetails.module.css'
import Image from 'next/image'
import CheckIcon from '@/assets/icons/CheckIcon'
import DownArrowIcon from '@/assets/icons/DownArrowIcon';
import Slider from "react-slick";
import UpArrowIcon from '@/assets/icons/UpArrowIcon';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const faqs = [
    {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    }, {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    }, {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    }, {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    }, {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    }, {
        question: 'Do you offer post-launch support and maintenance?',
        answer: "Yes! I provide ongoing website maintenance, updates, and technical support to ensure your website remains fast, secure, and fully functional."
    },
];
interface FaqItem {
    question: string,
    answer: string
}
const baseUrl = '/assets/images';
const ServiceDetails = () => {
    const [activeFaq, setActiveFaq] = useState(0);
    const settings = {
        customPaging: function (i: number) {
            return (
                <a>
                    <img src={`${baseUrl}/service-${i + 1}.png`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={styles.serviceDetailContainer}>
            <div className={styles.serviceName}>Professional Web Development Services</div>
            <div className={styles.top}>
                <Image
                    src={'/assets/images/userprofile.png'}
                    width={42}
                    height={42}
                    alt="ServiceImage"
                    className={styles.profileImage}
                />
                <div className={styles.nameWithCategory}>
                    <div className={styles.userContent}>
                        <span className={styles.name}>John Smith</span>
                        <span className={styles.profession}>Full Stack Developer</span>
                    </div>
                    <div className={styles.category}>Programming & Tech</div>
                </div>
            </div>
            {/* <div className='slider-container'>
                <Slider {...settings}>
                    <div>
                        <img src={baseUrl + "/service-1.png"} />
                    </div>
                    <div>
                        <img src={baseUrl + "/service-2.png"} />
                    </div>
                    <div>
                        <img src={baseUrl + "/service-3.png"} />
                    </div>
                    <div>
                        <img src={baseUrl + "/service-4.png"} />
                    </div>
                </Slider>
            </div> */}
            <div className={styles.aboutService}>
                <div className={styles.serviceTitle}>About The Service</div>
                <div className={styles.aboutDesc}>Need a high-performing website that attracts customers and drives business growth? TechNova Web Solutions specializes in custom web development, creating stunning, responsive, and user-friendly websites tailored to your needs. From small businesses to large enterprises, we bring your ideas to life!</div>
            </div>
            <div className={styles.highlightsContainer}>
                <div className={styles.serviceTitle}>Key Highlights:</div>

                <ul className={styles.highlights}>
                    <li><span><CheckIcon width={12} height={12} /></span>Custom Website Development - Tailored solutions for businesses of all sizes.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>Responsive & Mobile-Friendly - Your website will look perfect on all devices.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>SEO-Optimized Design - Higher rankings & better visibility on search engines.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>E-commerce Solutions - Shopify, WooCommerce, and custom-built online stores.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>Fast & Secure Websites - Optimized for speed and security.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>CMS Development - WordPress, Joomla, and custom CMS solutions.</li>
                    <li><span><CheckIcon width={12} height={12} /></span>100% Custom Solutions - No Templates!</li>
                </ul>
            </div>
            <ul className={styles.skills}>
                <li>AWS</li>
                <li>PHP Developer</li>
                <li>Front end Developer</li>
                <li>HTML & CSS</li>
                <li>Wordpress</li>
                <li>Kubernates</li>
                <li>Customized Solutions</li>
                <li>Programming</li>
                <li>Technology</li>
                <li>Cloud</li>
            </ul>
            <div className={styles.pricing}>
                <div className={styles.serviceTitle}>Starting Price <span>$5000</span></div>
                <div className={styles.pricingDesc}>This is my base rate, but I&apos;m flexible! Let&apos;s chat about your requirements and I&apos;ll be glad to send a custom offer.</div>
            </div>
            <div className={styles.faqsContainer}>
                <div className={styles.serviceTitle}>Frequently Asked Questions</div>
                <div className={styles.faqs}>
                    {faqs.map((item: FaqItem, index: number) => <div key={index} className={styles.faq}>
                        <div className={styles.questionWithIcon}>
                            <div onClick={() => setActiveFaq(prev => (prev === index ? -1 : index))} className={styles.question}>{item.question}</div>
                            {activeFaq === index ? <UpArrowIcon width={16} height={16} /> : <DownArrowIcon width={16} height={16} />}
                        </div>
                        {activeFaq === index && <div className={styles.answer}>{item.answer}</div>}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails