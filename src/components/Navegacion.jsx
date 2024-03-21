import React from 'react'

import { Link, useLocation } from "react-router-dom";


import logo from "../assets/logo.svg";




const Navegacion = ({titulo}) => {

    const location = useLocation();
    const locacion = location.pathname;
    const tema = locacion === "/";

    const handleClick = (event) => {
        event.preventDefault();}

  return (

    <>
        <nav className=' flex justify-between items-center w-full bg-slate-600 px-20 py-2 relative'>
            <Link to="/"><img src={logo} alt="logo.svg" /></Link>
            <a href='#' onClick={handleClick} className='text-white text-base font-semibold'>Inicio</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >Prevaloracion</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >Factorage Verde</a>
            <a href="#" onClick={handleClick} className='text-white text-base font-semibold' >H & S</a>
            
        </nav>

        <div className=' bg-slate-500 w-full p-2 text-center'>
            <h2 className='text-white font-bold text-2xl uppercase '> { tema ? "HUB DE PROVEEDORES" : titulo} </h2>
        </div>
    </>
  )
}

export default Navegacion