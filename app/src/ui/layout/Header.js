import React from 'react'
import UseWindowDimensions from './components/hook/UseWindowDimensions'
import HomeHeader from './components/header/HomeHeader'
import HomeHeaderMobile from './components/header/HomeHeaderMobile'
import { useState } from 'react'
import {menuData} from '../../assets/data/MenuData'

function Header() {

  const [scroll, setScroll] = useState(false)

  const { width } = UseWindowDimensions();
  let responsive = width < 1200 ? true : false

  window.onscroll = function () {
      window.scrollY > 150 ? setScroll(true) : setScroll(false)
  };
  return (
    <div className='headerContainer'>
      {responsive ? <HomeHeaderMobile claseSubMenu="" data={menuData} clase={scroll ? "homeHeaderMobile_menu_fixed" : "homeHeaderMobile_menu"}/> : <HomeHeader claseSubMenu="" data={menuData} clase={scroll ? "homeHeader_menu_fixed" : "homeHeader_menu"}/>}
    </div>

  )
}

export default Header