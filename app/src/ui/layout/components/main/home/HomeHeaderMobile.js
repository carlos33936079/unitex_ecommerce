import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faBars, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function HomeHeaderMobile({data, clase}) {

    

    const [menu, setMenu] = useState(false)

    const handleClickMenu = (e) => {
        setMenu(!menu)
      }
      console.log(clase)

  return (
    <div className='homeHeaderMobile_container'>
        <div className='homeHeaderMobile_login'>
            <Link to="">Acceder<FontAwesomeIcon className="navBarLinks_menu_login_icon" icon={faUser}/></Link>
        </div>
        <div className='homeHeaderMobile_logo'>
            <Link className='home_logo' to="/"><img className='logo_img' src='images/logo/unitex-logo-1700x425.jpg' alt='imagen'/></Link>
        </div>
        <div className='homeHeaderMobile_logo'>
            <input className='home_browser' placeholder='Buscar en nuestra tienda...'/><FontAwesomeIcon className="navBarLinks_menu_logo_icon" icon={faMagnifyingGlass}/>
            <Link className='home_cart' to="">carrito</Link>
        </div>
        <div className={clase}>
            <button onClick={handleClickMenu}>
                <div><FontAwesomeIcon className="navBarLinks_menu_icon" icon={faBars}/>MENU</div>
                {menu ? <FontAwesomeIcon className="navBarLinks_menu_icon" icon={faCaretUp}/> : <FontAwesomeIcon className="navBarLinks_menu_icon" icon={faCaretDown}/>}
            </button>
            {menu ? <div className='homeHeaderMobile_subMenu'>
                {data.map((link) => {
                return <li className='navBarLink_li' key={link.id}><FontAwesomeIcon className="navBarLinks_menu_view_icon" icon={link.icon}/><Link to={link.path} className='link_category'>{link.name}</Link></li>
                })}
            </div> : null} 
        </div>
    </div>
  )
}

export default HomeHeaderMobile