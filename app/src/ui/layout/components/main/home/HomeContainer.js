import React from 'react'
import { homeSlideData } from '../../../../../assets/data/HomeSlideData'
import HomeMain from './HomeMain'
import SlideShow from './SlideShow'

function HomeContainer() {

  return (
    <div className='homeContainer_container'>
        <SlideShow data={homeSlideData}/>
        <HomeMain/>
    </div>
  )
}

export default HomeContainer