import React from 'react'
import { useState } from 'react'
import { homeSlideData } from '../../../../../assets/data/HomeSlideData'
import { menuData } from '../../../../../assets/data/MenuData'
import UseWindowDimensions from '../../hook/UseWindowDimensions'
import HomeHeader from './HomeHeader'
import HomeHeaderMobile from './HomeHeaderMobile'
import HomeMain from './HomeMain'
import SlideShow from './SlideShow'

function HomeContainer() {

  const [scroll, setScroll] = useState(false)

    const { width } = UseWindowDimensions();
    let responsive = width < 1200 ? true : false

    window.onscroll = function () {
        window.scrollY > 150 ? setScroll(true) : setScroll(false)
    };

  return (
    <div className='homeContainer_container'>
        {responsive ? <HomeHeaderMobile claseSubMenu="" data={menuData} clase={scroll ? "homeHeaderMobile_menu_fixed" : "homeHeaderMobile_menu"}/> : <HomeHeader claseSubMenu="" data={menuData} clase={scroll ? "homeHeader_menu_fixed" : "homeHeader_menu"}/>}
        <SlideShow data={homeSlideData}/>
        <HomeMain/>
    </div>
  )
}

export default HomeContainer