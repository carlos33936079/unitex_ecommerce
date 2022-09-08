import React from 'react'
import Item from './Item'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import {useParams} from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../hook/Firebase'

function ItemDetailContainer() {

  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState([])
  const [variante, setVariante] = useState([])
  const {id, vte} = useParams()

useEffect(()=>{

  const productCollection = collection(db,"productos")
  const documentProduct = getDoc(doc(productCollection, id))
  documentProduct
        .then(respuesta=>{
          const product = {
            id: respuesta.id,
            ...respuesta.data()
          }
          setProducto(product)
          const varProd = product.variantes?.filter(variante => variante.habilitado === true);
          const obj = {...varProd}
          setVariante(obj)
        })
        .catch((error404)=>{
          toast.error('Error al cargar el Producto')
        })
        .finally((fin)=>{
          setLoading(false)   
        })
},[id])

  return (
    <div className='itemDetailContainer'>
        {loading ? "Cargando articulo..." : <Item producto={producto} variante={variante}/>}
    </div>
  )
}

export default ItemDetailContainer