import React from 'react'

import Slider2 from "./components/Slider2";

import Componente0 from "./components/Componente0";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";
import Componente5 from "./components/Componente5";
import Footer from "./components/Footer";
import "./styles/app.css";



const App = () => {

  return (
    <>

    <div className=' w-full grid grid-cols-2 p-10 contenedor '>

      <div className=' capa-transparente'></div>

      <div className=' relative flex flex-col space-y-5 items-center justify-around'>

        <h1 className='text-4xl text-white font-extrabold'>Lore que officiis. Motus pariatur hic!</h1>

        <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis at distinctio ea architecto, excepturi eos temporibus illo ipsam, in provident hic ullam tempore qui repudiandae culpa nesciunt inventore aut.</p>
        <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis at distinctio ea architecto, excepturi eos temporibus illo ipsam, in provident hic ullam tempore qui repudiandae culpa nesciunt inventore aut.</p>

        <div className=' flex justify-around w-1/2 m-auto'>
          <a className='text-white font-bold text-2xl bg-green-500 p-1 rounded-md' href="#">Ver mas </a>
          <a className='text-white font-bold text-2xl bg-green-500 p-a rounded-md' href="#">Contacto</a>
        </div>

      </div>

      <Componente5/>

    </div>

    </>


  )
}

export default App