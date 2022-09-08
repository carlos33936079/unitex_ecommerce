import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Galery from './Galery'

function Item({producto, variante}) {
    // console.log("variante",variante)
    // console.log("producto",producto)

    const [numVariarnte, setNumVariante] = useState(0)
    const [varianteActual, setVarianteActual] = useState(variante[numVariarnte])
    const [selectFoto, setSelectFoto] = useState(0)

    console.log("foto", selectFoto)

    const onAdd = (i) => {
        setSelectFoto(i)
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
                    return <Galery key={i} imagen={imagen} i={i} onAdd={onAdd}/>
                    })}
                </div>
            </div>
            <div className='item_description_desc_container'>
                <div className='item_description_product'>
                    <div className='item_description_product_title'>
                        <h2>{`${producto.nombre} - ${varianteActual.vte} ${varianteActual.color}`.toUpperCase()}</h2>
                        <h3>{`${producto.anchoMetro} mts de ancho - art. ${producto.id}`.toUpperCase()}</h3>
                    </div>
                    <div className='item_description_product_price'>
                        <div className='item_description_product_price_'>
                            <div className='item_description_product_price_01'>
                                <div>
                                    <h3>POR MENOR</h3>
                                    <h4>a partir de 1 metro/unidad</h4>
                                </div>
                                <h3>${producto.precio}</h3>
                            </div>
                            <span></span>
                        </div>
                        <div className='item_description_product_price_'>
                            <div className='item_description_product_price_01'>
                                <div>
                                    <h3>POR MAYOR</h3>
                                    <h4>a partir de 10 metro/unidad</h4>
                                </div>
                                <h3>${Math.trunc(producto.precio/1.05)}</h3>
                            </div>
                            <span></span>
                        </div>
                        <div className='item_description_product_price_'>
                            <div className='item_description_product_price_01'>
                                <div>
                                    <h3>POR PIEZA</h3>
                                    <h4>pieza cerrada de {producto.largoMetro} metros</h4>
                                </div>
                                <h3>${Math.trunc(producto.precio/1.10)}</h3>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div className='item_description_product_tags'>
                        <h3>usos</h3>
                        <h4>tags</h4>
                    </div>
                    
                </div>
                <div>contador</div>
            </div>
        </div>
    </div>
  )
}

// /images/product/Art l7 set vte 14 naranja fluo.jpg

export default Item