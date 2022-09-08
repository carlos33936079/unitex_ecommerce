import React from 'react'

function Galery({imagen, i, onAdd}) {

    const handleClick =()=>{
        onAdd(i)
      }
      
  return (
    <div key={i} className='item_description_galeria_images' onClick={handleClick}><img src={imagen} alt="imgen" /></div>
  )
}

export default Galery