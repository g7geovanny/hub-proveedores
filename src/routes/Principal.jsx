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

    <div className=' w-full grid grid-cols-2 justify-center items-center p-5 contenedor '>

      <div className=' capa-transparente'></div>

      <div className=' relative flex flex-col p-5 items-center '>

        <h1 className='text-3xl text-white font-extrabold mb-20'>Lore que officiis. Motus pariatur hic!</h1>

        <p className='text-2xl text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis at distinctio ea architecto, excepturi eos temporibus illo ipsam, in provident hic ullam tempore qui repudiandae culpa nesciunt inventore aut.</p>
        <p className='text-2xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis at distinctio ea architecto, excepturi eos temporibus illo ipsam, in provident hic ullam tempore qui repudiandae culpa nesciunt inventore aut.</p>

        <div className=' flex justify-around w-1/2 mt-16 m-auto'>
          <a className='text-white font-bold text-lg bg-green-500 p-3 rounded-md hover:bg-green-600 transition-all duration-200' href="#">Ver mas</a>
          <a className='text-white font-bold text-lg bg-green-500 p-3 rounded-md hover:bg-green-600 transition-all duration-200 ' href="#">Contacto</a>
        </div>

      </div>

      <Componente5/>

    </div>


     <Componente1/>

     <Componente2/>

     <Componente3/>

     
    <Footer/>

    
    </>


  )
}

export default Principal