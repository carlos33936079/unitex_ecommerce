import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus, faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function HomeHeader({data}) {
  return (
    <div className='homeHeader_container'>
        <div className='homeHeader_login'>
            <Link to="">Acceder<FontAwesomeIcon className="navBarLinks_menu_login_icon" icon={faUser}/></Link>
            <Link to="">Registrarse<FontAwesomeIcon className="navBarLinks_menu_login_icon" icon={faUserPlus}/></Link>
        </div>
        <div className='homeHeader_logo'>
            <input className='home_browser' placeholder='Buscar en nuestra tienda...'/><FontAwesomeIcon className="navBarLinks_menu_logo_icon" icon={faMagnifyingGlass}/>
            <Link className='home_logo' to="/"><img className='logo_img' src='images/logo/unitex-logo-1700x425.jpg' alt='imagen'/></Link>
            <Link className='home_cart' to="">carrito</Link>
        </div>
        <div className='homeHeader_menu'>
          {data.map((link) => {
          return <li className='navBarLink_li' key={link.id}><FontAwesomeIcon className="navBarLinks_menu_view_icon" icon={link.icon}/><Link to={link.path} className='link_category'>{link.name}</Link></li>
          })}
        </div>
    </div>
  )
}

export default HomeHeader