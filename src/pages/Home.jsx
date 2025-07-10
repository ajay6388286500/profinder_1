import React from 'react'
import HeroSlider from './HeroSlider'
import FeaturedCategories from '../dashboard/FeaturedCategories'
import BannerSection from '../dashboard/BannerSection'
import ProductTabs from '../dashboard/ProductCard'
import DailyBestSells from '../dashboard/DailyBestSells'
import DealsOfTheDay from '../dashboard/DealsOfTheDay'
import ProductListSection from '../dashboard/ProductListSection'

export default function Home() {
  return (
    <main className="main profinder-background">

  <HeroSlider />

  <BannerSection />
  {/*End banners*/}

 <ProductTabs />
  {/*Products Tabs*/}
 

 {/* <DailyBestSells /> */}
  {/*End Best Sales*/}
  <DealsOfTheDay />
 
  <ProductListSection />
  {/*End 4 columns*/}
</main>

  )
}
