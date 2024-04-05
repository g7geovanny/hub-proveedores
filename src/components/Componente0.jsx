import React from 'react'

import { Link } from "react-router-dom";

import carrito from "../assets/carrito2.webp";

import icono1 from "../assets/planeta-tierra.png";
import icono2 from "../assets/documentos.png";
import icono3 from "../assets/proteger.png";
import icono4 from "../assets/mapa.png";
import icono5 from "../assets/calificacion.png";
import icono6 from "../assets/destino.png";
import iconoNuevo from "../assets/icono-nuevo.svg";
import icono2Nuevo from "../assets/icono2-nuevo.svg";
import icono3Nuevo from "../assets/icono3-nuevo.svg";
import icono4Nuevo from "../assets/icono4-nuevo.svg";
import icono5Nuevo from "../assets/icono5-nuevo.svg";

const Componente0 = () => {
  return (

    <div className='w-full m-auto p-10 flex flex-col bg-slate-200'>

          <div className=' w-12/12 m-auto bg-slate-300 flex justify-between items-center p-5 gap-5 '>

            <img className=' w-40 h-32' src={carrito} alt="imagen" />

            <div className='w-4/5 space-y-5'>

              <h2 className=' font-extrabold text-lg text-blue-950 '>CONSTRUYENDO PROGRESO PARA LAS PERSONAS Y EL PLANETA</h2>

              <p className=' text-sm  font-noto '>Holcim lidera el progreso global hacia soluciones de construcción innovadoras y sostenibles. Con un enfoque en la sostenibilidad, busca convertirse en una empresa net-zero, priorizando a su equipo y comunidades. Destaca en la construcción circular y respalda marcas confiables como Disensa y Geocycle. Con 60,000 empleados en todo el mundo, se dedica a mejorar la vida de las personas y el planeta a través de sus segmentos de negocio: Cemento, Concreto Premezclado, Agregados y Soluciones y Productos.</p>

            </div>

            <a className=' cursor-pointer rounded-lg text-lg text-center font-bold w-32 mr-5 p-2 bg-green-500 hover:bg-green-700 transition-all duration-200'>ingresa</a>

          </div>


          <div className=' w-2/3 flex m-auto justify-between items-center  mt-5  '>

            <div className='flex flex-col justify-center items-center space-y-3 '>
              <Link to="/factoraje-verde"><img className=' bg-transparent w-16 h-16 hover:rotate-45 transition-all duration-300' src={iconoNuevo} alt="" /></Link>
              <p className='text-sm font-bold '>Factorage Verde</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-3 '>
              <Link to="/requisitos-h&S"> <img className=' w-16 h-16 hover:rotate-45 transition-all duration-300' src={icono2Nuevo} alt="" /></Link>
              <p className='text-sm font-bold '>Requisitos H & S </p>
            </div>


            <div className='flex flex-col justify-center items-center space-y-3 '>
              <Link to="/ivms"> <img className=' w-16 h-16 hover:rotate-45 transition-all duration-300' src={icono4Nuevo} alt="" /></Link>
              <p className='text-sm font-bold '>IVMS</p>
            </div>


            <div className='flex flex-col justify-center items-center space-y-3 '>
              <Link to="/rutas"> <img className=' w-16 h-16 hover:rotate-45 transition-all duration-300' src={icono5Nuevo} alt="" /></Link>
              <p className='text-sm font-bold '>Rutas</p>
            </div>

          </div>

      </div>
  )
}

export default Componente0

