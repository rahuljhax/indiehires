import React from 'react'
import StepTracker from './components/StepTracker/StepTracker'
import AboutService from './components/AboutService/AboutService'
import ImagesVideos from './components/ImagesVideos/ImagesVideos'
import styles from './page.module.css'
import Pricing from './components/Pricing/Pricing'
import FAQs from './components/FAQs/FAQs'
const page = () => {
  return (
    <section>
      <StepTracker />
      <div className={styles.formContainer}>
        <AboutService />
        <ImagesVideos />
        <Pricing />
        <FAQs/>
      </div>
    </section>
  )
}

export default page