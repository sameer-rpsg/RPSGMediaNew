import BrandAdvertismentBanner from '@/components/home/BrandAdvertismentBanner'
import Hero from '@/components/home/Hero'
import HomeAbout from '@/components/home/HomeAbout'
import StickyCardSection from '@/components/home/StickyCardSection'
import React from 'react'

const index = () => {
  return (
    <div>
      <Hero/>
      <HomeAbout/>
      <StickyCardSection/>
      <BrandAdvertismentBanner/>
    </div>
  )
}

export default index
