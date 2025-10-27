import React from 'react'
import BrandAdvertismentBanner from '@/components/home/BrandAdvertismentBanner'
import Hero from '@/components/home/Hero'
import HomeAbout from '@/components/home/HomeAbout'
import HomeContact from '@/components/home/HomeContact'
import StickyCardSection from '@/components/home/StickyCardSection'
import Hero2 from '@/components/home/Hero2'

const index = () => {
  return (
    <div>
      {/* <Hero/> */}
      <Hero2/>
      <HomeAbout/>
      <StickyCardSection/>
      <BrandAdvertismentBanner/>
      <HomeContact/>
    </div>
  )
}

export default index
