import React from 'react'
import Navegacion from "../components/Navegacion";
import Footer from "../components/Footer";

import Qr from "../assets/qr.svg";
import { Link } from 'react-router-dom';

const Precalificacion = () => {
  return (
    <>
    <Navegacion titulo="prevaloracion"/>

    <div className=' w-3/4 m-auto my-5 grid grid-cols-2 justify-center items-center p-10 border-t-4 border-black'>

        <div className='flex flex-col justify-center items-center p-10 gap-10  '>
          <h1 className='text-3xl font-bold uppercase'>captura el qr</h1>

          <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam architecto maiores, debitis quam atque, tempora soluta dignissimos minus illum delectus tempore perferendis nam magnam ab illo, esse voluptates? Sint.</p>

          <Link>Ver</Link>
        </div>
      
      <img className='w-64 h-64 m-auto' src={Qr} alt="" />

    </div>

    <Footer/>
    </>
  )
}

export default Precalificacion