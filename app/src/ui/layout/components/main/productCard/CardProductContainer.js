import React from 'react'
import { Link } from 'react-router-dom'

function CardProductContainer() {
  return (
    <div className='cardProduct_container'>
        <div className='cardProduct_image'>
            <div className='cardProduct_img'>
                <img className='cardProduct_img2' src='images/product/Art k7 set vte 14.jpg' alt='imagen'/>
                <div className='cardProduct_img_description'>
                    <div className='cardProduct_img_description_text'>
                        <p>Ancho: 1.5 mts.</p>
                        <p>Pieza de: 70 mts.</p>
                        <p>Peso: 350 gr el mt.</p>
                        <p>Composición: 100% Polyester</p>
                    </div>
                    <Link to="" className='cardProduct_img_description_btn'>Ver+</Link>   
                </div>  
                <img className='cardProduct_img1' src='images/product/Art l7 set vte 14 naranja fluo.jpg' alt='imagen'/>
            </div>
            <modal>
            </modal>
        </div>
        <div className='cardProduct_description'>
            <Link className='cardProduct_description_title' to="">TITULO TELA - 01 VARIANTE SARASA</Link>
            <div className='cardProduct_description_desc'>
                <div className='cardProduct_description_desc_text'>
                    <p>Por menor</p>
                    <p2>$329,00</p2>
                </div>
                <div className='cardProduct_description_desc_text'>
                    <p>Por mayor</p>
                    <p2>312,00</p2>
                </div>
                <div className='cardProduct_description_desc_text'>
                    <p>Por pieza</p>
                    <p2>$296,00</p2>
                </div>
            </div>
            <Link className='cardProduct_description_btn' to="">AGREGAR</Link>
        </div>
    </div>
  )
}

export default CardProductContainer