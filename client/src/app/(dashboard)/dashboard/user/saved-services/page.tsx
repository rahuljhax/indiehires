import React from 'react'
import SearchServices from './components/SearchServices/SearchServices'
import ServiceListings from './components/ServiceListings/ServiceListings'

const page = () => {
  return (
    <section>
      <SearchServices />
      <ServiceListings />
    </section>
  )
}

export default page