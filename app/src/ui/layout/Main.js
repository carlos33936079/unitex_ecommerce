import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeContainer from './components/main/home/HomeContainer'


function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer/>} />
    </Routes>
  )
}

export default Main