import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HomeHeader({data}) {
  return (
    <div className='homeHeader_container'>
        <div className='homeHeader_login'>
            <Link to="">Iniciar sesión</Link>
            <Link to="">Registrarse</Link>
        </div>
        <div className='homeHeader_logo'>
            <input className='home_browser' placeholder='Buscador'/>
            <Link className='home_logo' to="/"><img className='logo_img' src='images/logo/unitex-logo-1700x425.jpg' alt='imagen'/></Link>
            <div className='home_cart'>carrito</div>
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