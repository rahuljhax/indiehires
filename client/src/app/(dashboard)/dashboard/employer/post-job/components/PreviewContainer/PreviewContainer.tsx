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
                        <div className={styles.previewTitle}>Job details</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Job Title</span>
                            <div className={styles.content}>React Js Developer</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Job Category</span>
                            <div className={styles.content}>Technical/IT</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Job Description:</span>
                            <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iste ab non voluptate ipsum voluptas porro neque consectetur, voluptates obcaecati in ducimus atque sed quasi amet. Earum eaque explicabo reiciendis!</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Job Type:</span>
                            <div className={styles.content}>Full-Time</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Country:</span>
                            <div className={styles.content}>United States</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>City:</span>
                            <div className={styles.content}>New York</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Salary Range:</span>
                            <div className={styles.content}>$ 345 - $ 765</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Hide salary from job posting:</span>
                            <div className={styles.content}>Yes</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Should the candidate apply on the C3H Global site?:</span>
                            <div className={styles.content}>No, Website URL-www.google.com </div>
                        </div>
                    </div>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>Qualifications and Requirements</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Education Level:</span>
                            <div className={styles.content}>Associate Degree, Doctoral Degree</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Gender Preference:</span>
                            <div className={styles.content}>Male</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Experience Required</span>
                            <div className={styles.content}>5 years</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Experience Level:</span>
                            <div className={styles.content}>Mid-Level, Senior Level</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Skills Needed:</span>
                            <div className={styles.content}>React js, Next Js</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Expiration Date:</span>
                            <div className={styles.content}>08/07/2025</div>
                        </div>

                    </div>
                </div>
                <div className={styles.previewBoxes}>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>Add Media</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Company URL:</span>
                            <div className={styles.content}>www.google.com</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Images:</span>
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
                            <span className={styles.label}>Video URL:</span>
                            <div className={styles.content}>www.video.com</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Video Thumbnail:</span>
                            <div className={styles.contentImages}>
                                <Image
                                    src={'/assets/images/image.png'}
                                    width={250}
                                    height={250}
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>SEO & Metadata</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>SEO Title:</span>
                            <div className={styles.content}>Test SEo title</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Focus Keyphrase:</span>
                            <div className={styles.content}>Test Focus Keyphrase</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Meta Description:</span>
                            <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iste ab non voluptate ipsum voluptas porro neque consectetur, voluptates obcaecati in ducimus atque sed quasi amet. Earum eaque explicabo reiciendis!</div>
                        </div>
                    </div>
                    <div className={styles.previewBox}>
                        <div className={styles.previewTitle}>Additional Fields</div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Required Certifications:</span>
                            <div className={styles.content}>Test Required Certications</div>
                        </div>
                        <div className={styles.contentBox}>
                            <span className={styles.label}>Other Details:</span>
                            <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iste ab non voluptate ipsum voluptas porro neque consectetur, voluptates obcaecati in ducimus atque sed quasi amet. Earum eaque explicabo reiciendis!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PreviewContainer;