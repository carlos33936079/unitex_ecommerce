import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CardProductContainer(props) {
    
    const [portada, setPortada] = useState([])

    useEffect(()=>{
        let port= []
        props.variantes.map((variante) => {
            return variante.habilitado ? port.push(variante.imagen) : null
        })
        setPortada(port)
    },[props])

  return (
    
    <div className='cardProduct_container'>
        
        <div className='cardProduct_image'>
            <div className='cardProduct_img'>
                <img className='cardProduct_img2' src={portada[1] ? portada[1] : portada[0]} alt='imagen'/>
                <div className='cardProduct_img_description'>
                    <div className='cardProduct_img_description_text'>
                        <p>Ancho: {props.anchoMetro} mts.</p>
                        <p>Pieza de: {props.largoMetro} mts.</p>
                        <p>Peso: {props.pesoGramo} gr el mt.</p>
                        <p>Composición: {props.composicion}</p>
                    </div>
                    <Link to={`/product/${props.nombre}`} className='cardProduct_img_description_btn'>Ver+</Link>   
                </div>  
                <Link to={`/product/${props.id}`} className='cardProduct_img_description_btn'><img className='cardProduct_img1' src={portada[0]} alt='imagen'/></Link>
            </div> 
        </div>
        <div className='cardProduct_description'>
            <Link className='cardProduct_description_title' to="">{props.nombre.toUpperCase()}</Link>
            <div className='cardProduct_description_desc'>
                <div className='cardProduct_description_desc_text'>
                    <p>Por menor</p>
                    <p className='card_price'>${props.precio},00</p>
                    
                </div>
                <div className='cardProduct_description_desc_text'>
                    <p>Por mayor</p>
                    <p className='card_price'>${Math.trunc(props.precio/1.05)},00</p>
                </div>
                <div className='cardProduct_description_desc_text'>
                    <p>Por pieza</p>
                    <p className='card_price'>${Math.trunc(props.precio/1.10)},00</p>
                </div>
            </div>
            <Link className='cardProduct_description_btn' to="">AGREGAR</Link>
        </div>
    </div>
    
  )
}

export default CardProductContainer