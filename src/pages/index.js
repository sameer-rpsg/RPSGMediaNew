import BrandAdvertismentBanner from '@/components/home/BrandAdvertismentBanner'
import Hero from '@/components/home/Hero'
import HomeAbout from '@/components/home/HomeAbout'
import HomeContact from '@/components/home/HomeContact'
import MagazineSection from '@/components/home/MagazineSection'
import StickyCardSection from '@/components/home/StickyCardSection'
import React from 'react'

const index = () => {
  return (
    <div>
      <Hero/>
      <HomeAbout/>
      <StickyCardSection/>
      {/* <MagazineSection/> */}
      <BrandAdvertismentBanner/>
      <HomeContact/>
    </div>
  )
}

export default index
