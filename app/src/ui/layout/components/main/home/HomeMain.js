import React from 'react'
import CardProductContainer from "../productCard/CardProductContainer"
function HomeMain() {
  return (
    <div className='homeMain_container'>
        <h1 className='homeMain_title'>- PRODUCTOS EXCLUSIVOS -</h1>
        <div className='homeMain_products'>
            <div className='homeMain_products_first'>
                <CardProductContainer/>
                <CardProductContainer/>
                <CardProductContainer/>
                <CardProductContainer/>

            </div>
            <div className='homeMain_products_menu'>
                <li>TODO LO QUE BUSCAS</li>
                <li>TELAS POR NOMBRE</li>
                <li>TELAS POR USO</li>
                <li>MODA</li>
                <li>BLANCO</li>
            </div>
            <div className='homeMain_products_second'>caja 2</div>

        </div>
    </div>
  )
}

export default HomeMain