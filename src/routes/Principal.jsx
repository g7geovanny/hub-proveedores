import React from 'react'

import Slider2 from "../components/Slider2";

import Componente0 from "../components/Componente0";
import Componente1 from "../components/Componente1";
import Componente2 from "../components/Componente2";
import Componente3 from "../components/Componente3";
import Componente5 from "../components/Componente5";
import Footer from "../components/Footer";
import "../styles/app.css";



const Principal = () => {

  return (
    <>

    <Slider2/>

    <Componente0/>

    <div className=' w-full grid grid-cols-2 justify-center items-center'>

      <div className='contenedor flex flex-col items-center h-full p-8 px-20 '>
      <div className=' capa-transparente'></div>

        <h1 className=' relative text-3xl text-white font-extrabold mt-16 mb-10'>Lore que officiis. Motus pariatur hic!</h1>

        <p className='relative text-2xl text-white mb-10 mt-10'>Como líder mundial en soluciones innovadoras y sostenibles para la construcción, Holcim está haciendo posible tener ciudades más verdes, infraestructuras más inteligentes y mejorar el nivel de vida de las personas en todo el mundo.</p>
        <p className='relative text-2xl text-white'>Con la sostenibilidad al centro de su estrategia, Holcim se está convirtiendo en una empresa net-zero, en donde su gente y sus comunidades son la base de su éxito.</p>

        <div className=' relative flex justify-around w-1/2 mt-16 m-auto'>
          <a className='text-white font-bold text-lg border-2 border-teal-300 bg-green-500 p-3 rounded-md hover:bg-green-600 transition-all duration-200 ' href="#">Ver mas</a>
          <a className='text-white font-bold text-lg border-2 border-teal-300 bg-green-500 p-3 rounded-md hover:bg-green-600 transition-all duration-200 ' href="#">Contacto</a>
        </div>

      </div>

      <Componente5/>

    </div>


     <Componente1/>

     <Componente2/>

     
    <Footer/>

    
    </>


  )
}

export default Principal