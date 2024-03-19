import React from 'react'

import logo from "../assets/logo.svg";


const Navegacion = () => {

    const handleClick = (event) => {
        event.preventDefault();}

  return (

    <>
        <nav className=' flex justify-between items-center w-full bg-slate-600 px-20 py-2 relative'>
            <a href="#"><img src={logo} alt="logo.svg" /></a>
            <a href='#' onClick={handleClick} className='text-white text-base font-semibold'>Inicio</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >Prevaloracion</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >Factorage Verde</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >H & S</a>
            
        </nav>

        <div className=' bg-slate-500 w-full p-2 text-center'>
            <h2 className='text-white font-bold text-2xl uppercase '>hub de proveedores</h2>
        </div>
    </>
  )
}

export default Navegacion