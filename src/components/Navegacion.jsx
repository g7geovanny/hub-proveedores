import React from 'react'

import "../styles/navegacion.css"

import { Link, useLocation } from "react-router-dom";


import logo from "../assets/logo.svg";




const Navegacion = ({titulo}) => {

    const location = useLocation();
    const locacion = location.pathname;
    const tema = locacion === "/";


  return (

    <>
        <nav className=' flex justify-between items-center w-full px-20 py-5 relative'>
            <Link to="/"><img src={logo} alt="logo.svg"/></Link>
            <Link to="/" className=' text-lg font-semibold text-slate-700 uppercase'>Inicio</Link>
            <Link to="/precalificacion" href="#"   className=' text-lg font-semibold text-slate-700 uppercase' >Prevaloracion</Link>
            <Link to="/factoraje-verde" href="#"  className=' text-lg font-semibold  text-slate-700 uppercase' >Factoraje Verde</Link>
            <Link to="/requisitos-h&S" href="#"   className=' text-lg font-semibold  text-slate-700 uppercase' >H & S</Link>
        </nav>

        <div className='w-full h-5  fondo'></div>

        <div className=' w-full p-4 text-center'>
            <h2 className='text-slate-700 font-bold text-2xl uppercase '> { tema ? "HUB DE PROVEEDORES" : titulo} </h2>
        </div>
    </>
  )
}

export default Navegacion