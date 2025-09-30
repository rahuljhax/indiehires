'use client';
import React, { useState } from 'react'
import styles from '../../page.module.css'
import Button from '@/app/components/common/Button/Button'
import UploadMedia from '@/app/components/common/FormComponents/UploadMedia/UploadMedia'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput';
const ImagesVideos = () => {
  const [images, setImages] = useState<FileList | null>(null);
  const [videoThumbnail, setVideoThumbnail] = useState<File | null>(null)
  return (
    <div className={styles.container}>
      <div className={styles.title}>Images & Videos</div>
      <div className={styles.content}>
        <div className="subTitle">Upload media to showcase your service.</div>
        <div className="form">
          <UploadMedia
            label="Upload Media"
            onChange={(f) => setImages(f as FileList)}
            multiple
            infoText=' You can upload .jpg, .jpeg, .png, .webp, .bmp, .webm, .tiff. (Recommended image size: width 817px, height 349px.)'
          />
          <UploadMedia
            label="Thumbnail Image"
            onChange={(f) => setVideoThumbnail(f as File)}
          />
          <CustomInput
          label='Video URL (if any)'
          placeholder='e.g., a YouTube or Vimeo link'
          />
          <div className={styles.next}>
            <Button width='auto' style='greyFill' buttonText='Back' />
            <Button width='auto' style='skyblue' buttonText='Next' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesVideos