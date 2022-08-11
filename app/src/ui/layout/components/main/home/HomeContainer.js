import React from 'react'
import { homeSlideData } from '../../../../../assets/data/HomeSlideData'
import { menuData } from '../../../../../assets/data/MenuData'
import HomeHeader from './HomeHeader'
import SlideShow from './SlideShow'



function HomeContainer() {
  return (
    <div className='homeContainer_container'>
        <HomeHeader data={menuData}/>
        <SlideShow data={homeSlideData}/>
    </div>
  )
}

export default HomeContainer