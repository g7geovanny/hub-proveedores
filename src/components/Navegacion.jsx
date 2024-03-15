import React from 'react'

const Navegacion = () => {

    const handleClick = (event) => {
        event.preventDefault();}

  return (

    <>
        <nav className=' flex justify-between items-center w-full bg-slate-600 p-5 relative'>
            <a href='#' onClick={handleClick} className='text-white text-lg font-semibold'>Inicio</a>
            <a href="#" onClick={handleClick} className='text-white text-lg font-semibold' >Prevaloracion</a>
            <a href="#" onClick={handleClick} className='text-white text-lg font-semibold' >Alta de Proveedor</a>
            <a href="#" onClick={handleClick} className='text-white text-lg font-semibold' >Precalificacion</a>
            <a href="#" onClick={handleClick} className='text-white text-lg font-semibold' >Plataformas</a>
        </nav>

        <div className=' bg-slate-500 w-full p-8 text-center'>
            <h2 className='text-white font-bold text-2xl uppercase '>hub de proveedores</h2>
        </div>
    </>
  )
}

export default Navegacion