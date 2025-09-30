import React from 'react'
import JobFilter from './components/JobFilter/JobFilter'
import JobListings from './components/JobListings/JobListings'

const page = () => {
  return (
    <section>
      <JobFilter />
      <JobListings />
    </section>
  )
}

export default page