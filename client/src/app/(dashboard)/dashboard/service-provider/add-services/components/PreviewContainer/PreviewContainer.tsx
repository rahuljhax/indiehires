import React from "react";
import styles from './PreviewContainer.module.css'
import Image from "next/image";
const PreviewContainer = () => {
    return (
        <div className={styles.previewContainer}>
            <div className="title">Preview Job Posting</div>
            <div className={styles.previewGrid}>
                <div className={styles.previewBoxes}>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>About Service</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Service Title</span>
                            <div className={styles.content}>App Development Services</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Service Category</span>
                            <div className={styles.content}>Managed IT Services</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Location</span>
                            <div className={styles.content}>New York</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Phone Number</span>
                            <div className={styles.content}>+1-1234567890</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>About Service</span>
                            <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iste ab non voluptate ipsum voluptas porro neque consectetur, voluptates obcaecati in ducimus atque sed quasi amet. Earum eaque explicabo reiciendis!</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Highlights</span>
                            <div className={styles.content}>we will develop in a budget, we are the top one percent developer accross the world</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Keywords</span>
                            <div className={styles.content}>App dev, React native, Flutter</div>
                        </div>
                    </div>
                       <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>Images & Videos</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Media Images</span>
                            <div className={styles.contentImages}>
                                <Image
                                    src={'/assets/images/image.png'}
                                    width={250}
                                    height={250}
                                    alt="Image"
                                />
                                <Image
                                    src={'/assets/images/image.png'}
                                    width={250}
                                    height={250}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Thumbnail Image</span>
                            <div className={styles.contentImages}>
                                <Image
                                    src={'/assets/images/image.png'}
                                    width={250}
                                    height={250}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Video URL:</span>
                            <div className={styles.content}>www.video.com</div>
                        </div>
                    </div>
                </div>
                <div className={styles.previewBoxes}>
               
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>Pricing</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Pricing Type</span>
                            <div className={styles.content}>Fixed Price</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Starting Price</span>
                            <div className={styles.content}>$ 999</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Hide price from service posting</span>
                            <div className={styles.content}>Yes</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Pricing Description</span>
                            <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde corporis exercitationem non facere eligendi harum, quam reiciendis aliquid itaque quos illo dicta dolor. Amet voluptatibus sapiente voluptates recusandae exercitationem.</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Will the user submit the service request through the C3H Global site?</span>
                            <div className={styles.content}>No - www.google.com</div>
                        </div>
                    </div>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>FAQs</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>what is the budget for this app</span>
                            <div className={styles.content}>this is the answer</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>what is the budget for this app</span>
                            <div className={styles.content}>this is the answer</div>
                        </div>
                         <div className={styles.contentBox}>
                            <span className={styles.label}>what is the budget for this app</span>
                            <div className={styles.content}>this is the answer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PreviewContainer;