'use client';
import React, { useState } from "react";
import styles from './AddMedia.module.css'
import CustomInput from "@/app/components/common/FormComponents/CustomInput/CustomInput";
import UploadMedia from "@/app/components/common/FormComponents/UploadMedia/UploadMedia";
const AddMedia = () => {
    const [images, setImages] = useState<FileList | null>(null);
    const [videoThumbnail, setVideoThumbnail] = useState<File | null>(null)
    return (
        <div className={styles.box}>
            <div className={styles.title}>Add Media</div>
            <div className={styles.subTitle}>Add images related to the job or company (e.g., images of the office or work culture)</div>
            <div className="form">
                <CustomInput
                    label="Company URL"
                    required
                    placeholder="Website url"
                />
                <UploadMedia
                    label="Images"
                    onChange={(f) => setImages(f as FileList)}
                    multiple
                />
                <CustomInput
                    label="Video URL"
                    required
                    placeholder="e.g., a YouTube or Vimeo link"
                />
                <UploadMedia
                    label="Video Thumbnail"
                    onChange={(f) => setVideoThumbnail(f as File)}
                />
            </div>
        </div>
    )
}
export default AddMedia;