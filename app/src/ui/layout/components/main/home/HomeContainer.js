import React from 'react'
import { homeSlideData } from '../../../../../assets/data/HomeSlideData'
import { menuData } from '../../../../../assets/data/MenuData'
import HomeHeader from './HomeHeader'
import HomeMain from './HomeMain'
import SlideShow from './SlideShow'

function HomeContainer() {
  return (
    <div className='homeContainer_container'>
        <HomeHeader data={menuData}/>
        <SlideShow data={homeSlideData}/>
        <HomeMain/>
    </div>
  )
}

export default HomeContainer