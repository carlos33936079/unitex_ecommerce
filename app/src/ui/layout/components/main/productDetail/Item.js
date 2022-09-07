import React from 'react'
import { Link } from 'react-router-dom'

function Item() {
  return (
    <div className='itemContainer'>
        <div className='item_nav'>
            <div><Link to="/">INICIO ♦</Link></div>
            <div>TITULO TELA</div>
        </div>
        <div className='item_description'>
            <div className='item_description_img_container'>
                <div className='item_description_img'><img src="/images/product/Art l7 set vte 14 naranja fluo.jpg" alt="imagen" /></div>
                <div className='item_description_galeria'>galeria</div>
            </div>
            <div className='item_description_desc_container'>
                <div>descripcion</div>
                <div>contador</div>
            </div>
        </div>
    </div>
  )
}

// /images/product/Art l7 set vte 14 naranja fluo.jpg

export default Item