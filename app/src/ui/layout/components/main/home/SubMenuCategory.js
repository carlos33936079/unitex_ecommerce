import React from 'react'

function SubMenuCategory() {
  return (
    <li className='navBarLink_li' key={link.id}><FontAwesomeIcon className="navBarLinks_menu_view_icon" icon={link.icon}/><Link to={link.path} className='link_category'>{link.name}</Link></li>
                
  )
}

export default SubMenuCategory