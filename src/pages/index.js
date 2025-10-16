import React from 'react'
import BrandAdvertismentBanner from '@/components/home/BrandAdvertismentBanner'
import Hero from '@/components/home/Hero'
import HomeAbout from '@/components/home/HomeAbout'
import HomeContact from '@/components/home/HomeContact'
import StickyCardSection from '@/components/home/StickyCardSection'

const index = () => {
  return (
    <div>
      <Hero/>
      <HomeAbout/>
      <StickyCardSection/>
      <BrandAdvertismentBanner/>
      <HomeContact/>
    </div>
  )
}

export default index
