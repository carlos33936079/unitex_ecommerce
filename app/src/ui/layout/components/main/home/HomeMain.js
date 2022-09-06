import React from 'react'
import Exclusive from './Exclusive'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import {useLocation, useParams} from 'react-router-dom'
import { db } from '../../hook/Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

function HomeMain() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(()=>{
      setLoading(true)
      const productCollection = collection(db,"productos")
      let documentProduct = []
      documentProduct = getDocs(productCollection)
      documentProduct
                  .then(respuesta=>{
                    const aux = []
                    respuesta.forEach(element => {
                      const product = {
                        id: element.id,
                        ...element.data()
                      }
                      aux.push(product)
                    })
                    setProductos(aux)
                  })         
      .catch((error404)=>{
        toast.error('Error al cargar el Producto')
      })
      .finally((fin)=>{
        setLoading(false)   
      })
    
},[])

// console.log(productos)

  return (
    <div className='homeMain_container'>
        <h1 className='homeMain_title'>- PRODUCTOS EXCLUSIVOS -</h1>
        <div className='homeMain_products'>
        {productos ? <Exclusive productos={productos} loading={loading}/>: <div>No se encontraron productos...</div>}
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