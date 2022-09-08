import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Item({producto, variante}) {
    // console.log("variante",variante)
    // console.log("producto",producto)

    const [numVariarnte, setNumVariante] = useState(0)
    const [varianteActual, setVarianteActual] = useState(variante[numVariarnte])
    const [selectFoto, setSelectFoto] = useState(0)

    console.log("foto", selectFoto)

    const handleClick = (key,value) => {
        console.log("muestra",value)
    }

  return (
    <div className='itemContainer'>
        <div className='item_nav'>
            <div><Link to="/">INICIO ♦</Link></div>
            <div>{`${producto.nombre} - vte ${varianteActual.vte}`.toUpperCase()}</div>
        </div>
        <div className='item_description'>
            <div className='item_description_img_container'>
                <div className='item_description_img'><Link to=""><img src={varianteActual.imagen[selectFoto]} alt="imagen" /></Link></div>
                <div className='item_description_galeria'>
                    
                    {varianteActual.imagen.map((imagen, i)=>{
                    return <div key={i} className='item_description_galeria_images' onClick={handleClick}><img src={imagen} alt="imgen" /></div>
                    })}
                </div>
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