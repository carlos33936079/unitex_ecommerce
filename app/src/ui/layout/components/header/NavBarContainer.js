import React, { useState } from 'react'
import UseWindowDimensions from '../hook/UseWindowDimensions';
import NavBarMenu from './NavBarMenu';
import NavBarResponsive from './NavBarResponsive';

function NavBarContainer() {

    const [scroll, setScroll] = useState(false)

    const { width } = UseWindowDimensions();
    let responsive = width < 1200 ? true : false

    window.onscroll = function () {
        window.scrollY > 200 ? setScroll(true) : setScroll(false)
    };

  return (
    <>
        {/* {responsive ? <NavBarResponsive/> : scroll? <NavBarMenu/>: null} */}
        
    </>
  )
}

export default NavBarContainer




 