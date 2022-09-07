import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './components/main/home/HomeContainer'
import ItemDetailContainer from './components/main/productDetail/ItemDetailContainer'


function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
      <Route path="/product/:id" element={<ItemDetailContainer/>} />
    </Routes>
  )
}

export default Main