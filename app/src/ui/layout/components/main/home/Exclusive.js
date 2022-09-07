import React from 'react'
import CardProductContainer from "./CardProductContainer"

function Exclusive({productos, loading}) {
    console.log(productos)
  return (
        <div className='homeMain_products_first'>
            { loading ? "Cargando Productos..." : productos.map((producto, i)=>{
            return producto.habilitado ? <CardProductContainer key= {i} {...producto}/> : null })}
                

        </div>
  )
}

export default Exclusive